import searchController from '../controllers/searchController';

// API ROUTES
const gifRoutes = (app) => {
  app.get('/search/:searchTerm', searchController);
};

export default gifRoutes;