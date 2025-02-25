const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3010;

app.use(express.static('static'));



const DB_URL = 'mongodb+srv://mukesh:mukesh%40123@cluster-1.6gnqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1';

mongoose.connect(DB_URL)
.then(()=>{console.log('Mongodb connected Successfully!')})
.catch(err => console.log('Mongodb connection failed : ',err));


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});