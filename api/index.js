const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let jobs = [];

app.get('/', (req, res) => {
  res.send('Shaghalni Server is Running!');
});

app.get('/api', (req, res) => {
  res.send('Shaghalni Server is Running!');
});

app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/jobs', (req, res) => {
  const job = { 
    id: Date.now(), 
    ...req.body, 
    date: new Date().toLocaleDateString('ar-IQ') 
  };
  jobs.push(job);
  res.json({ success: true, job });
});

module.exports = app;
