const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');

const jobsRout = require('./routs/jobRout');
const connect = require('./db/db-connection');

app.use(express.json());


app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 3600 // Preflight request cache duration in seconds
}));



app.use("/api/v1/jobs", jobsRout);


const port = process.env.PORT;
const start = async () => {
  await connect(process.env.MONGO_URI);
  app.listen(port, console.log(`app is listening on port ${port}...`));
}

start();