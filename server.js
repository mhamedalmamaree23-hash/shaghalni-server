[8/12/2026 8:37 PM] َ: {
  "name": "shaghalni-server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": { "start": "node server.js" },
  "dependencies": { "express": "^4.18.2", "cors": "^2.8.5" }
}
[8/12/2026 8:54 PM] َ: const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let jobs = [];

app.get('/', (req, res) => {
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
