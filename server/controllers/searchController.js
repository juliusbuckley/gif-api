import axios from 'axios';
import qs from 'querystring';

const getGiphys = (req, res) => {
  const searchUrl = 'http://api.giphy.com/v1/gifs/search';
  const parameters = {
    q: req.params.searchTerm,
    api_key: process.env.GIPHY_KEY,
    limit: 5
  };
  const paramUrl = qs.stringify(parameters);
  const apiUrl = searchUrl + '?' + paramUrl;
  axios.get(apiUrl)
    .then((response) => {
      if (response.data.pagination.total_count < 5) {
        res.send('Sorry, your search had less than 5 results and cannot be displayed!');
      } else {
        res.send(response.data);
      }
    })
    .catch((err) => { `Error: ${err}`; });
};

export default getGiphys;