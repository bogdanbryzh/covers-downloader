import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { fetcher } from './fetcher.js';

const port = process.env.PORT;

const app = express();

app.use(helmet());
app.use(cors());

app.get('/', (res, req) => {
  req.status(200).json(fetcher(res.query.query));
});

app.listen(port, err => {
  if (err) throw new Error(err);
  console.log('server started');
});
