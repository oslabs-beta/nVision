import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { parseController } from './parseController';
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';

interface ServerError {
  log: string;
  status: number;
  message: { err: string };
};

const PORT = parseInt(process.env.PORT || "8080");
const app = express();

// const provider = new NodeTracerProvider();

// const exporter = new OTLPTraceExporter({ url: 'http://localhost:8080' });
// provider.addSpanProcessor(new BatchSpanProcessor(exporter));
// provider.register();


// registerInstrumentations({
//   instrumentations: [new HttpInstrumentation()],
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this doesn't do anything because otlptraceexporter does not access '/' endpoint
app.use('/', parseController.getData, (req, res) => {
  return res.status(200).send({});
});

//global error handler
app.use('/', (err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});

module.exports = app;
