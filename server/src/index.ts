import dotenv from 'dotenv';
dotenv.config(); // Need to configure this before we import anything else
import { createServer } from 'http';
import { app } from './app';
import { sequelize } from './db/database';

// Get environment variables
const port = process.env.PORT || 3001;

(async () => {
  // console.log(googleApi.certs);
  await sequelize.sync({ force: true });

  // tslint:disable-next-line:no-console
  createServer(app).listen(port, () => console.info(`Server running on port ${port}`));
})();
