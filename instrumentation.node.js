const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  ConsoleSpanExporter,
  BatchSpanProcessor,
  SimpleSpanProcessor,
} = require('@opentelemetry/sdk-trace-node');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} = require('@opentelemetry/sdk-metrics');
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
const {
  OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-http');

const exporter = new OTLPTraceExporter({ url: 'http://localhost:8080' });
const resource = new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: 'NextJS-Demo',
});
const sdk = new NodeSDK({
  resource,
  // metricReader: new PeriodicExportingMetricReader({
  //   exporter: new ConsoleMetricExporter()
  // }),
  spanProcessor: new SimpleSpanProcessor(exporter),
  // instrumentations: [new HttpInstrumentation()],
});

sdk.start();