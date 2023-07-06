const express = require("express");
const parseController = require('./parseController')
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { ConsoleSpanExporter, BatchSpanProcessor, NodeTracerProvider, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { PeriodicExportingMetricReader, ConsoleMetricExporter } = require('@opentelemetry/sdk-metrics');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');

const PORT = parseInt(process.env.PORT || "8080");
const app = express();

const provider = new NodeTracerProvider();

const exporter = new OTLPTraceExporter({ url: 'http://localhost:8080' });
provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register();


registerInstrumentations({
  instrumentations: [new HttpInstrumentation()],
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', parseController.getdata, (req, res) => {
  return res.status(200).send({});
})

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});

module.exports = app;