import express from 'express';
import path from 'path';
import gifRoutes from './routes/gifRoutes';

const app = express();
const port = 8080;

gifRoutes(app);

app.listen(() => { console.log(`app.js has been served on port: ${port}`); });