import { Request, Response, NextFunction, RequestHandler } from 'express';

interface parseController {
  getData: RequestHandler,
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

const parseFetchRoute = (span:[fetchSpanData], data:[]) => {
  const fetchSpanData = span[0];
  const { traceId, spanId, parentSpanId, kind, startTimeUnixNano, endTimeUnixNano, attributes } = fetchSpanData;
  let fetchKind: string | undefined;
  if (kind === 1) fetchKind = 'Internal';
  if (kind === 2) fetchKind = 'Server';
  if (kind === 3) fetchKind = 'Client';
  const spanDataObj = {
    type: 'fetch',
    traceId,
    spanId,
    parentSpanId,
    fetchKind,
    method: attributes.find(attribute => attribute.key === 'http.method')?.value?.stringValue,
    url: attributes.find(attribute => attribute.key === 'http.url')?.value?.stringValue,
    time: (endTimeUnixNano - startTimeUnixNano) / 10 ** 6,
  }
  console.log(spanDataObj)
}

const parseBaseServer = (span: [fetchSpanData], data: []) => {
  const serverSpanData = span[0];
  const { traceId, spanId, parentSpanId, kind, startTimeUnixNano, endTimeUnixNano, attributes } = serverSpanData;
  let fetchKind: string | undefined;
  if (kind === 1) fetchKind = 'Internal';
  if (kind === 2) fetchKind = 'Server';
  if (kind === 3) fetchKind = 'Client';
  const spanDataObj = {
    type: 'route',
    traceId,
    spanId,
    parentSpanId,
    fetchKind,
    method: attributes.find(attribute => attribute.key === 'http.method')?.value?.stringValue,
    route: attributes.find(attribute => attribute.key === 'http.target')?.value?.stringValue,
    statusCode: attributes.find(attributes => attributes.key === 'http.status_code')?.value.intValue,
    time: (endTimeUnixNano - startTimeUnixNano) / 10 ** 6,
  }
  console.log(spanDataObj);
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
      // case 'AppRender.getBodyResult':
      //   // parseBaseServer(spans, res.locals.data);
      //   break;
    }
    return next();
  }

};