const parseController = {};

parseController.getdata = function (req, res, next) {
  console.log('in parseController');
  console.log(req.body)
  // console.log('********resource********')
  // req.body.resourceSpans[0].resource.attributes.forEach(el => console.log(el.value))
  // console.log('********scopeSpans********')
  // console.log(req.body.resourceSpans[0].scopeSpans[0].spans[0].name)
  // console.log(req.body.resourceSpans[0].scopeSpans[0].spans[0].attributes)
  return next();
}

module.exports = parseController;