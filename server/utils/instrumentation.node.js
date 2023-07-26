const { NodeSDK } = require('@opentelemetry/sdk-node');
const { SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-node');
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const startTrace = () => {
  console.log('tracing started')
  const sdk = new NodeSDK({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'NextJS-Demo',
    }),
    spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter({url: 'http://localhost:8080'})),
  })
  
  sdk.start();
}

export default startTrace;