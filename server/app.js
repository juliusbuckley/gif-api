import express from 'express';
import giphyRoutes from './routes/giphyRoutes';

const app = express();
const port = process.env.PORT || 8080;

giphyRoutes(app);
app.listen(port, () => { console.log(`app.js has been served on port: ${port}`); });