const { NodeSDK } = require('@opentelemetry/sdk-node');
const { SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-node');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const startServer = require('../utils/server');

const startTrace = () => {
  const sdk = new NodeSDK({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'NextJS-Demo',
    }),
    spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter({url: 'http://localhost:8080'})),
    // instrumentations: [new HttpInstrumentation(), ]
  })
  
  sdk.start();
  startServer();
}

export default startTrace;