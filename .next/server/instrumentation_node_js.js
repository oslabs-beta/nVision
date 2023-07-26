"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "instrumentation_node_js";
exports.ids = ["instrumentation_node_js"];
exports.modules = {

/***/ "./instrumentation.node.js":
/*!*********************************!*\
  !*** ./instrumentation.node.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _opentelemetry_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @opentelemetry/resources */ \"@opentelemetry/resources\");\n/* harmony import */ var _opentelemetry_resources__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opentelemetry_resources__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @opentelemetry/semantic-conventions */ \"@opentelemetry/semantic-conventions\");\n/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__);\nconst { NodeSDK } = __webpack_require__(/*! @opentelemetry/sdk-node */ \"@opentelemetry/sdk-node\");\nconst { ConsoleSpanExporter, BatchSpanProcessor, SimpleSpanProcessor } = __webpack_require__(/*! @opentelemetry/sdk-trace-node */ \"@opentelemetry/sdk-trace-node\");\nconst { HttpInstrumentation } = __webpack_require__(/*! @opentelemetry/instrumentation-http */ \"@opentelemetry/instrumentation-http\");\nconst { PeriodicExportingMetricReader, ConsoleMetricExporter } = __webpack_require__(/*! @opentelemetry/sdk-metrics */ \"@opentelemetry/sdk-metrics\");\n\n\nconst { OTLPTraceExporter } = __webpack_require__(/*! @opentelemetry/exporter-trace-otlp-http */ \"@opentelemetry/exporter-trace-otlp-http\");\nconst sdk = new NodeSDK({\n    resource: new _opentelemetry_resources__WEBPACK_IMPORTED_MODULE_0__.Resource({\n        [_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__.SemanticResourceAttributes.SERVICE_NAME]: \"NextJS-Demo\"\n    }),\n    // metricReader: new PeriodicExportingMetricReader({\n    //   exporter: new ConsoleMetricExporter()\n    // }),\n    spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter({\n        url: \"http://localhost:8080\"\n    }))\n});\nsdk.start() // const provider = new NodeTracerProvider();\n // const exporter = new OTLPTraceExporter();\n // provider.addSpanProcessor(new BatchSpanProcessor(exporter));\n // provider.register();\n // registerInstrumentations({\n //   instrumentations: [new HttpInstrumentation()],\n // });\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnN0cnVtZW50YXRpb24ubm9kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sRUFBRUEsT0FBTyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBQzVCLE1BQU0sRUFBRUMsbUJBQW1CLEVBQUVDLGtCQUFrQixFQUFFQyxtQkFBbUIsRUFBQyxHQUFHSCxtQkFBT0EsQ0FBQztBQUNoRixNQUFNLEVBQUVJLG1CQUFtQixFQUFFLEdBQUdKLG1CQUFPQSxDQUFDO0FBQ3hDLE1BQU0sRUFBRUssNkJBQTZCLEVBQUVDLHFCQUFxQixFQUFFLEdBQUdOLG1CQUFPQSxDQUFDO0FBQ3RCO0FBQzZCO0FBQ2hGLE1BQU0sRUFBRVMsaUJBQWlCLEVBQUUsR0FBR1QsbUJBQU9BLENBQUM7QUFFdEMsTUFBTVUsTUFBTSxJQUFJWCxRQUFRO0lBQ3RCWSxVQUFVLElBQUlKLDhEQUFRQSxDQUFDO1FBQ3JCLENBQUNDLDJGQUEwQkEsQ0FBQ0ksWUFBWSxDQUFDLEVBQUU7SUFDN0M7SUFDQSxvREFBb0Q7SUFDcEQsMENBQTBDO0lBQzFDLE1BQU07SUFDTkMsZUFBZSxJQUFJVixvQkFBb0IsSUFBSU0sa0JBQWtCO1FBQUNLLEtBQUs7SUFBdUI7QUFFNUY7QUFFQUosSUFBSUssS0FBSyxHQUdULDZDQUE2QztDQUU3Qyw0Q0FBNEM7Q0FDNUMsK0RBQStEO0NBQy9ELHVCQUF1QjtDQUd2Qiw2QkFBNkI7Q0FDN0IsbURBQW1EO0NBQ25ELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udmlzaW9uLy4vaW5zdHJ1bWVudGF0aW9uLm5vZGUuanM/NTdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IE5vZGVTREsgfSA9IHJlcXVpcmUoJ0BvcGVudGVsZW1ldHJ5L3Nkay1ub2RlJyk7XG5jb25zdCB7IENvbnNvbGVTcGFuRXhwb3J0ZXIsIEJhdGNoU3BhblByb2Nlc3NvciwgU2ltcGxlU3BhblByb2Nlc3Nvcn0gPSByZXF1aXJlKCdAb3BlbnRlbGVtZXRyeS9zZGstdHJhY2Utbm9kZScpO1xuY29uc3QgeyBIdHRwSW5zdHJ1bWVudGF0aW9uIH0gPSByZXF1aXJlKCdAb3BlbnRlbGVtZXRyeS9pbnN0cnVtZW50YXRpb24taHR0cCcpO1xuY29uc3QgeyBQZXJpb2RpY0V4cG9ydGluZ01ldHJpY1JlYWRlciwgQ29uc29sZU1ldHJpY0V4cG9ydGVyIH0gPSByZXF1aXJlKCdAb3BlbnRlbGVtZXRyeS9zZGstbWV0cmljcycpO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9yZXNvdXJjZXMnXG5pbXBvcnQgeyBTZW1hbnRpY1Jlc291cmNlQXR0cmlidXRlcyB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zJ1xuY29uc3QgeyBPVExQVHJhY2VFeHBvcnRlciB9ID0gcmVxdWlyZSgnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItdHJhY2Utb3RscC1odHRwJyk7XG5cbmNvbnN0IHNkayA9IG5ldyBOb2RlU0RLKHtcbiAgcmVzb3VyY2U6IG5ldyBSZXNvdXJjZSh7XG4gICAgW1NlbWFudGljUmVzb3VyY2VBdHRyaWJ1dGVzLlNFUlZJQ0VfTkFNRV06ICdOZXh0SlMtRGVtbycsXG4gIH0pLFxuICAvLyBtZXRyaWNSZWFkZXI6IG5ldyBQZXJpb2RpY0V4cG9ydGluZ01ldHJpY1JlYWRlcih7XG4gIC8vICAgZXhwb3J0ZXI6IG5ldyBDb25zb2xlTWV0cmljRXhwb3J0ZXIoKVxuICAvLyB9KSxcbiAgc3BhblByb2Nlc3NvcjogbmV3IFNpbXBsZVNwYW5Qcm9jZXNzb3IobmV3IE9UTFBUcmFjZUV4cG9ydGVyKHt1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnfSkpLFxuICAvLyBpbnN0cnVtZW50YXRpb25zOiBbbmV3IEh0dHBJbnN0cnVtZW50YXRpb24oKSwgXVxufSlcblxuc2RrLnN0YXJ0KClcblxuXG4vLyBjb25zdCBwcm92aWRlciA9IG5ldyBOb2RlVHJhY2VyUHJvdmlkZXIoKTtcblxuLy8gY29uc3QgZXhwb3J0ZXIgPSBuZXcgT1RMUFRyYWNlRXhwb3J0ZXIoKTtcbi8vIHByb3ZpZGVyLmFkZFNwYW5Qcm9jZXNzb3IobmV3IEJhdGNoU3BhblByb2Nlc3NvcihleHBvcnRlcikpO1xuLy8gcHJvdmlkZXIucmVnaXN0ZXIoKTtcblxuXG4vLyByZWdpc3Rlckluc3RydW1lbnRhdGlvbnMoe1xuLy8gICBpbnN0cnVtZW50YXRpb25zOiBbbmV3IEh0dHBJbnN0cnVtZW50YXRpb24oKV0sXG4vLyB9KTtcbiJdLCJuYW1lcyI6WyJOb2RlU0RLIiwicmVxdWlyZSIsIkNvbnNvbGVTcGFuRXhwb3J0ZXIiLCJCYXRjaFNwYW5Qcm9jZXNzb3IiLCJTaW1wbGVTcGFuUHJvY2Vzc29yIiwiSHR0cEluc3RydW1lbnRhdGlvbiIsIlBlcmlvZGljRXhwb3J0aW5nTWV0cmljUmVhZGVyIiwiQ29uc29sZU1ldHJpY0V4cG9ydGVyIiwiUmVzb3VyY2UiLCJTZW1hbnRpY1Jlc291cmNlQXR0cmlidXRlcyIsIk9UTFBUcmFjZUV4cG9ydGVyIiwic2RrIiwicmVzb3VyY2UiLCJTRVJWSUNFX05BTUUiLCJzcGFuUHJvY2Vzc29yIiwidXJsIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./instrumentation.node.js\n");

/***/ })

};
;