// app/tracing.js
console.log('TRACING');
import { ConsoleSpanExporter, SimpleSpanProcessor, WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';

// const { WebTracerProvider } = require( '@opentelemetry/sdk-trace-web');
// const { DocumentLoadInstrumentation } = require( '@opentelemetry/instrumentation-document-load');
// const { ZoneContextManager } = require( '@opentelemetry/context-zone');
// const { registerInstrumentations } = require( '@opentelemetry/instrumentation');
// const { HttpInstrumentation } = require( '@opentelemetry/instrumentation-http');

// async function runTest() {
//   const { WebTracerProvider } = await import('@opentelemetry/sdk-trace-web');
//   const { DocumentLoadInstrumentation } = await import( '@opentelemetry/instrumentation-document-load');
//   const { ZoneContextManager } = await import( '@opentelemetry/context-zone');
//   const { registerInstrumentations } = await import( '@opentelemetry/instrumentation');
//   const { HttpInstrumentation } = await import( '@opentelemetry/instrumentation-http');

const provider = new WebTracerProvider();

provider.register({
  contextManager: new ZoneContextManager(),
});

// Add span processor to console log spans for debugging
// Remove this line in production or add a proper exporter for sending spans to your backend
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

// }

const startOtelInstrumentation = () => {
  console.error(`Registering Otel ${new Date().getMilliseconds()}`);
  // Registering instrumentations
  registerInstrumentations({
    instrumentations: [
      new DocumentLoadInstrumentation(),
      new HttpInstrumentation(),
      // Add other browser-specific instrumentations here if needed
    ],
  });
};

export { startOtelInstrumentation };
