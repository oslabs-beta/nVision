import { Request, Response, NextFunction, RequestHandler } from 'express';

interface parseController {
  getData: RequestHandler,
  fetchSpans: RequestHandler,
  clearSpans: RequestHandler
}

interface fetchSpanData {
  traceId: string,
  spanId: string,
  parentSpanId: string,
  kind: number,
  startTimeUnixNano: number,
  endTimeUnixNano: number,
  attributes: [any],
}

// Parse HTTP fetch span data
const parseFetchRoute = (span:[fetchSpanData], data:object[]) => {
  const fetchSpanData = span[0];
  const { traceId, spanId, parentSpanId, kind, startTimeUnixNano, endTimeUnixNano, attributes } = fetchSpanData;
  let fetchKind: string | undefined;
  if (kind === 1) fetchKind = 'Internal';
  if (kind === 2) fetchKind = 'Server';
  if (kind === 3) fetchKind = 'Client';
  const spanDataObj = {
    type: 'fetch',
    id: spanId,
    traceId,
    parentSpanId,
    fetchKind,
    method: attributes.find(attribute => attribute.key === 'http.method')?.value?.stringValue,
    url: attributes.find(attribute => attribute.key === 'http.url')?.value?.stringValue,
    duration: (endTimeUnixNano - startTimeUnixNano) / 10 ** 6,
  }
  data.push(spanDataObj)
  return;
}

// Parse API route span data
const parseBaseServer = (span: [fetchSpanData], data: object[]) => {
  const serverSpanData = span[0];
  const { traceId, spanId, parentSpanId, kind, startTimeUnixNano, endTimeUnixNano, attributes } = serverSpanData;
  let fetchKind: string | undefined;
  if (kind === 1) fetchKind = 'Internal';
  if (kind === 2) fetchKind = 'Server';
  if (kind === 3) fetchKind = 'Client';
  const spanDataObj = {
    type: 'route',
    id: spanId,
    traceId,
    parentSpanId,
    fetchKind,
    method: attributes.find(attribute => attribute.key === 'http.method')?.value?.stringValue,
    url: attributes.find(attribute => attribute.key === 'http.target')?.value?.stringValue,
    statusCode: attributes.find(attributes => attributes.key === 'http.status_code')?.value.intValue,
    duration: (endTimeUnixNano - startTimeUnixNano) / 10 ** 6,
  }
  data.push(spanDataObj);
  return;
}

/**
 *
 * @param {*} req - request object
 * @param {*} res  - response object
 * @param {*} next - express next object
 * @returns - call to next middleware
 */

export const parseController = {
  getData: function (req: Request, res: Response, next: NextFunction) {
    const spans = req.body.resourceSpans[0].scopeSpans[0].spans;
  
    const spanType = spans[0].attributes.find(
      (attr: { key: string; }) => attr.key === 'next.span_type'
    )?.value?.stringValue;
    res.locals.data = [];
    switch (spanType) {
      case 'AppRender.fetch':
        parseFetchRoute(spans, res.locals.data);
        break;
      case 'BaseServer.handleRequest':
        parseBaseServer(spans, res.locals.data);
        break;
      default:
        return next();
    }
    return next();
  }
};