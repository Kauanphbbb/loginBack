import express from 'express';
import { MongoClient } from 'mongodb';
import config from 'config';

const app = express();
const db:string = config.get('mongoURL');
const client = new MongoClient(db);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 });
    console.log('Connected successfully to server');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.listen(3333, () => console.log('Server started on port 3333'));
