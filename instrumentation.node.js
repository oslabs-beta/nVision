const { NodeSDK } = require('@opentelemetry/sdk-node');
const { SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-node');
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'NextJS-App',
  }),
  // Export trace data to custom server
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter({url: 'http://localhost:8080'})),
  instrumentations: [new HttpInstrumentation()],
});

sdk.start();