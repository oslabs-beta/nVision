const fs = require('fs');
const path = require('path')
const parseController = {};

parseController.getdata = function (req, res, next) {
  console.log('in parseController');
  console.log('********scopeSpans********')
  req.body.resourceSpans[0].scopeSpans.forEach(span => {
    if (span.scope.name !== '@opentelemetry/instrumentation-fs') {
      console.log('***start scope***: ', span.scope.name);
      span.spans.forEach(span => {
        // console.log(span)
        console.log('span name: ', span.name);
        console.log(span.attributes);
      })
      console.log('***end scope***')
    }
  })
  // console.log('********resource********')
  // req.body.resourceSpans[0].resource.attributes.forEach(el => console.log(el))

  console.log('********END********')
  return next();
}

module.exports = parseController;