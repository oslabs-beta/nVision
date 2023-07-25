import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
  Express
} from 'express';
import { parseController } from './parseController';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import ws, {WebSocketServer} from 'ws';
import { Socket } from 'net';
import { IncomingMessage } from 'http';


// Importing the events module
const startServer = () => {
  // const {
  //   express,
  //   Request,
  //   Response,
  //   NextFunction,
  //   RequestHandler,
  // } = require('express');
  // const { parseController } = require('./parseController');
  // const {
  //   registerInstrumentations,
  // } = require('@opentelemetry/instrumentation');
  // const {
  //   HttpInstrumentation,
  // } = require('@opentelemetry/instrumentation-http');
  // const ws = require('ws');

  // Initializing instance of EventEmitter to be used
  const wss:WebSocketServer = new ws.Server({ noServer: true });

  interface ServerError {
    log: string;
    status: number;
    message: { err: string };
  }

  const PORT = 8080;
  const app = express();

  let client: ws;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', parseController.getData, (req:Request, res:Response) => {
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
  server.on('upgrade', (request:IncomingMessage, socket:Socket, head: any) => {
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

module.exports = startServer;
export default startServer;
