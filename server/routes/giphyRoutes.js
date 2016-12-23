import searchController from '../controllers/searchController';
// API ROUTES
const giphyRoutes = (app) => { app.get('/search/:searchTerm', searchController); };
export default giphyRoutes;