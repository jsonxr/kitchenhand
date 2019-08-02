import colors, { black } from 'colors/safe';
import debug from 'debug';
import { NextFunction, Request, Response } from 'express';
import onFinished from 'on-finished';

const log = debug('http');

interface LoggerOptions {
  headers?: string[];
  blacklist: string[];
}

const createHeadersStrFn = (whitelist?: string[]): any => {
  return (headers: any) => {
    if (whitelist && whitelist.length === 0) {
      return '';
    }

    const keys = whitelist ? whitelist : Object.keys(headers);
    // If we are using a whitelist, then let the order determine the output
    if (!whitelist) {
      keys.sort();
    }
    const strings = keys.map((k: any) => `${colors.cyan(k)}: ${headers[k]}`);
    return `${strings.join('\n')}\n`;
  };
};

const logResponse = (err: any, res: Response) => {
  // const body = JSON.stringify(res.body, redact, 2);
};

export const expressRequestLogger = (options: LoggerOptions = { blacklist: ['password'] }) => {
  // Create the redactor
  const blacklist = options.blacklist || [];
  const redact = (key: string, value: any) => (blacklist.includes(key) ? '[REDACTED]' : value);
  const getHeadersStr = createHeadersStrFn(options.headers);

  return (req: Request, res: Response, next: NextFunction) => {
    const body = JSON.stringify(req.body, redact, 2);
    const headers = getHeadersStr(req.headers);

    log(
      `${req.method} ${req.path}`,
      `

${colors.blue(req.method)} ${req.path}
${headers}
${body}
`,
    );

    // log when response finished
    onFinished(res, logResponse);

    next();
  };
};

export default expressRequestLogger;
