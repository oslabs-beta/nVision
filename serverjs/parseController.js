const parseFetchRoute = (span, data) => {
  const fetchSpanData = span[0];
  const { traceId, spanId, parentSpanId, kind, startTimeUnixNano, endTimeUnixNano, attributes } = fetchSpanData;
  let fetchKind;
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

const parseBaseServer = (span, data) => {
  const serverSpanData = span[0];
  const { traceId, spanId, parentSpanId, kind, startTimeUnixNano, endTimeUnixNano, attributes } = serverSpanData;
  let fetchKind;
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
  // const traces = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');
  // const traceData = JSON.parse(traces);
  // traceData.traces.push(spanDataObj);
  // fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(traceData));
  return;
}

/**
 *
 * @param {*} req - request object
 * @param {*} res  - response object
 * @param {*} next - express next object
 * @returns - call to next middleware
 */

const parseController = {
  getData: function (req, res, next) {
    const spans = req.body.resourceSpans[0].scopeSpans[0].spans;
    // console.dir(req.body.resourceSpans[0].scopeSpans[0], {depth: null})
  
    const spanType = spans[0].attributes.find(
      (attr) => attr.key === 'next.span_type'
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
      default:
        return next();
    }
    return next();
  },
  fetchSpans: function (req, res, next) {
    const traceData = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');
    const traces = JSON.parse(traceData);
    // console.log(traces)
    res.locals.traces = traces;
    return next();
  },
  clearSpans: function (req, res, next) {
    console.log('in clearSpans')
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify({ traces: [] }));
    return next();
  }
};

module.exports = parseController;