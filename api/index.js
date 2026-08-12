const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let jobs = [];

app.get('/', (req, res) => {
  res.send('Shaghalni Server is Running! - قائد');
});

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/api/jobs', (req, res) => {
  const job = { 
    id: Date.now(), 
    ...req.body, 
    date: new Date().toLocaleDateString('ar-IQ') 
  };
  jobs.unshift(job);
  res.json({ success: true, job });
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
  jobs.unshift(job);
  res.json({ success: true, job });
});

module.exports = app;
