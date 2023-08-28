import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
const { getWebAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-web');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-node');
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { ZoneContextManager } = require('@opentelemetry/context-zone');

export const FrontendTracer = () => {
  const webProvider = new WebTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'web-tracer-test'
    })
  });
  webProvider.addSpanProcessor(new SimpleSpanProcessor(new OTLPTraceExporter({ url: 'http://localhost:8080' })));

  // const contextManager = new ZoneContextManager();

  provider.register();

  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      getWebAutoInstrumentations({
        '@opentelemetry/instrumentation-fetch': {
          propagateTraceHeaderCorsUrls: /.*/,
          clearTimingResources: true,
        },
      }),
    ],
  });
};



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
// webProvider.register({
//   // contextManager: new ZoneContextManager(),
// });