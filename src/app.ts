import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';
import errorMiddlaware from './middlewares/error.middleware';

class App {
  public express: express.Application;

  private dbUrl: string;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.database();
    this.initializeErrorHandling();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(routes);
  }

  private database(): void {
    this.dbUrl = process.env.MONGO_URL;
    console.log(this.dbUrl);

    mongoose.connect(this.dbUrl);
  }

  private initializeErrorHandling() {
    this.express.use(errorMiddlaware);
  }
}

export default new App().express;
