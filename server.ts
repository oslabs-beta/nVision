// import express, {
//   Request,
//   Response,
//   NextFunction,
//   RequestHandler,
// } from 'express';
// import { parseController } from './parseController';
// import { registerInstrumentations } from '@opentelemetry/instrumentation';
// import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// import ws from 'ws';
// import EventEmitter from 'events';

// Importing the events module
const runServer = () => {
  const {
    express,
    Request,
    Response,
    NextFunction,
    RequestHandler,
  } = require('express');
  const { parseController } = require('./parseController');
  const {
    registerInstrumentations,
  } = require('@opentelemetry/instrumentation');
  const {
    HttpInstrumentation,
  } = require('@opentelemetry/instrumentation-http');
  const ws = require('ws');
  const EventEmitter = require('events');

  // Initializing instance of EventEmitter to be used
  const emitter = new ws.EventEmitter();

  const wss = new ws.Server({ noServer: true });

  interface ServerError {
    log: string;
    status: number;
    message: { err: string };
  }

  const PORT = parseInt(process.env.PORT || '8080');
  const app = express();

  let client: ws;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/getSpans', parseController.fetchSpans, (req, res) => {
    return res.status(200).json(res.locals.traces);
  });

  app.get('/clearSpans', parseController.clearSpans, (req, res) => {
    return res.status(200).json('hello');
  });

  app.use('/', parseController.getData, (req, res) => {
    if (res.locals.data.length > 0) {
      client.send(JSON.stringify(res.locals.data));
    }
    return res.status(200);
  });

  //global error handler
  app.use(
    '/',
    (err: ServerError, req: Request, res: Response, next: NextFunction) => {
      const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
      };
      const errorObj = Object.assign({}, defaultErr, err);
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
    }
  );

  const server = app.listen(PORT, () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
  });

  //---------------------------------------- WEBSOCKETS ----------------------------------------
  //upgrade
  server.on('upgrade', function upgrade(request, socket, head) {
    try {
      wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
      });
    } catch (err) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }
  });

  wss.on('connection', function connection(ws) {
    console.log(`Recieved a new connection.`);
    client = ws;
    ws.on('message', function message(data, isBinary) {
      console.log('received message', data.toString());
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === ws.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });

    // handle close event
    ws.on('close', () => {
      console.log('closed', 'bye bye');
    });
  });
};
module.exports = runServer;
