import cookieParser from 'cookie-parser';
import { Application, default as express, json, urlencoded } from 'express';
import path from 'path';
import { expressErrorLogger, expressNotFoundLogger, expressRequestLogger } from './lib/logger';
import routes from './routes';

export const app: Application = express();

app.use(json());
// middleware for parsing application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  expressRequestLogger({
    // headers: [],
    headers: ['host', 'content-type', 'user-agent'],
    blacklist: ['password'],
  }),
);

// All static requests that are NOT in /api
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);
app.use(expressNotFoundLogger);
app.use(expressErrorLogger);
