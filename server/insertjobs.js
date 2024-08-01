const express = require('express');
const app = express();
require('dotenv').config();

const connect = require('./db/db-connection');

const Job = require('./models/jobModel');
const data = require('./jobs.json');

const port = 3005;
const start = async () => {
  await connect(process.env.MONGO_URI);
  app.listen(port, console.log(`app is listening on port ${port}...`));

  if(process.argv[2] === 'insert') {
    await Job.create(data);
    process.exit(1);
  } else if(process.argv[2] === 'delete') {
    await Job.deleteMany();
    process.exit(1);
  }
}
start();
