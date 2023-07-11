import express, { Request, Response, NextFunction, RequestHandler } from 'express';

interface ServerError {
  log: string;
  status: number;
  message: { err: string };
};

// PROXY
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CREATING SERVER

const server = app
  .listen(3333, () => console.log(' Server running on port 3333'))
  .on('uncaughtException', function (err) {
    console.log(err);
  });

//------------------WEBSOCKETS-------------------
// const io = require('socket.io').listen(server);
// io.sockets.on('connection', function (socket) {
//     ...
//   });
//-----------------------------------------------

//test route handler
app.get('/', (req, res) => {
  res.status(200).send('proxy set up');
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
