'use strict';

import express from "express";
import { CONSTANTS } from './config/constants';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({
  limit: '5mb',
  strict: true,
  type: ['application/json']
}));

app.listen(CONSTANTS.SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${CONSTANTS.SERVER_PORT}`);
})