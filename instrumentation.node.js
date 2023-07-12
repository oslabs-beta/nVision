const { NodeSDK } = require('@opentelemetry/sdk-node');
const { ConsoleSpanExporter, BatchSpanProcessor, SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-node');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { PeriodicExportingMetricReader, ConsoleMetricExporter } = require('@opentelemetry/sdk-metrics');
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const sdk = new NodeSDK({
  // traceExporter: new BatchSpanProcessor(new OTLPTraceExporter({url: 'http://localhost:8080'})),/*new ConsoleSpanExporter(),*/
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'NextJS-Demo',
  }),
  // metricReader: new PeriodicExportingMetricReader({
  //   exporter: new ConsoleMetricExporter()
  // }),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter({url: 'http://localhost:8080'})),
  // instrumentations: [new HttpInstrumentation(), ]
})

sdk.start()


// const provider = new NodeTracerProvider();

// const exporter = new OTLPTraceExporter();
// provider.addSpanProcessor(new BatchSpanProcessor(exporter));
// provider.register();


// registerInstrumentations({
//   instrumentations: [new HttpInstrumentation()],
// });
