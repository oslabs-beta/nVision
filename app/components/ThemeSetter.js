'use client';

import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
  WebTracerProvider,
} from '@opentelemetry/sdk-trace-web';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { useEffect } from 'react';
// import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

export default function ThemeSetter() {
  useEffect(() => {
    if (typeof window !== undefined) {
      // execute your logic here
      // app/tracing.js
      console.log('TRACING');

      const provider = new WebTracerProvider();

      provider.register({
        contextManager: new ZoneContextManager(),
      });

      // Add span processor to console log spans for debugging
      // Remove this line in production or add a proper exporter for sending spans to your backend
      provider.addSpanProcessor(
        new SimpleSpanProcessor(new ConsoleSpanExporter())
      );

      const startOtelInstrumentation = () => {
        // console.error(`Registering Otel ${new Date().getMilliseconds()}`);
        console.log('RUNNING HTML TRACE');
        // Registering instrumentations
        registerInstrumentations({
          instrumentations: [
            getWebAutoInstrumentations({
              '@opentelemetry/instrumentation-xml-http-request': {
                enabled: true,
                ignoreUrls: ['/localhost:8081/sockjs-node'],
                clearTimingResources: true,
                propagateTraceHeaderCorsUrls: [/.+/g],
              },
              '@opentelemetry/instrumentation-document-load': {
                enabled: true,
              },
            }),
          ],
        });
      };
      startOtelInstrumentation();
    }
  }, []);

  return null;
}
