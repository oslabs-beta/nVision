const { NodeSDK } = require('@opentelemetry/sdk-node');
const { ConsoleSpanExporter, BatchSpanProcessor, NodeTracerProvider, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { PeriodicExportingMetricReader, ConsoleMetricExporter } = require('@opentelemetry/sdk-metrics');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
 
const sdk = new NodeSDK({
  traceExporter: new ConsoleSpanExporter(),
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'next-app',
  }),
  // metricReader: new PeriodicExportingMetricReader({
  //   exporter: new BatchSpanProcessor(new ConsoleMetricExporter())
  // }),
  spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter({url: 'http://localhost:8080'})),
  instrumentations: [new HttpInstrumentation()]
});

sdk.start();

// const provider = new NodeTracerProvider();

// const exporter = new OTLPTraceExporter({ url: 'http://localhost:8080' });
// provider.addSpanProcessor(new BatchSpanProcessor(exporter));
// provider.register();


// registerInstrumentations({
//   instrumentations: [new HttpInstrumentation()],
// });