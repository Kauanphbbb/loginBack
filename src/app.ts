import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from 'config';
import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    App.database();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(routes);
  }

  static database(): void {
    const db:string = config.get('mongoURL');
    mongoose.connect(db);
  }
}

export default new App().express;
