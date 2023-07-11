const fs = require('fs');
const path = require('path')
const parseController = {};

parseController.getdata = function (req, res, next) {
  console.log('in parseController');
  // console.log('********scopeSpans********')
  // req.body.resourceSpans[0].scopeSpans.forEach(span => {
  //   if (span.scope.name !== '@opentelemetry/instrumentation-fs') {
  //     console.log('***start scope***: ', span.scope.name);
  //     span.spans.forEach(span => {
  //       // console.log(span)
  //       console.log('span name: ', span.name);
  //       console.log(span.attributes);
  //     })
  //     console.log('***end scope***')
  //   }
  // })
  const spans = req.body.resourceSpans[0].scopeSpans[0].spans;
  console.log(spans[0].attributes);

  const spanType = spans[0].attributes.find(
    (attr) => attr.key === "next.span_type"
  )?.value?.stringValue;
  res.locals.clientData = [];
  // switch (spanType) {
  //   case 
  // }
  console.log('********END********')
  return next();
}

module.exports = parseController;