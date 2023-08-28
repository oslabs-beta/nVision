const { NodeSDK } = require('@opentelemetry/sdk-node');
const { SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-node');
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { WebTracerProvider } = require('@opentelemetry/sdk-trace-web');
const { getWebAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-web');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
import { ZoneContextManager } from '@opentelemetry/context-zone';

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'NextJS-App',
  }),
  // Export trace data to custom server
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter({url: 'http://localhost:8080'})),
  instrumentations: [new HttpInstrumentation()],
});

// const webProvider = new WebTracerProvider({
//   resource: new Resource({
//     [SemanticResourceAttributes.SERVICE_NAME]: 'web-tracer-test'
//   })
// });

// webProvider.addSpanProcessor(new SimpleSpanProcessor(new OTLPTraceExporter({ url: 'http://localhost:8080' })));
// webProvider.register({
//   // contextManager: new ZoneContextManager(),
// });

// registerInstrumentations({
//   instrumentations: [
//     getWebAutoInstrumentations(/*{
//       // load custom configuration for xml-http-request instrumentation
//       '@opentelemetry/instrumentation-xml-http-request': {
//         clearTimingResources: true,
//       },
//     }*/),
//   ],
// });


sdk.start();