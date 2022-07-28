require('dotenv').config();
const express = require('express');
const api_router = require('./routes/ApiRouter');
const app = express();

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.use(express.json());
app.use('/api',api_router);

app.listen(PORT,HOSTNAME,() => {
    console.log(`Chat Application start at http://${HOSTNAME}:${PORT}`);
});
