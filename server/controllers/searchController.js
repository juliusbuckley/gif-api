import axios from 'axios';
import qs from 'querystring';
// PARSE RESPONSE DATA
const parseResp = (giphyResp) => {
  const array = [];
  giphyResp.data.forEach((giphy) => {
    array.push({
      gif_id: giphy.id,
      url: giphy.url
    });
  });
  return {data: array};
};
// CREATE QUERY STRING AND MAKE REQUEST TO GIPHY API
const getGiphy = (req, res) => {
  const searchUrl = 'http://api.giphy.com/v1/gifs/search?';
  const parameters = {
    q: req.params.searchTerm,
    api_key: process.env.GIPHY_KEY,
    limit: 5
  };
  const paramUrl = qs.stringify(parameters);
  const apiUrl = searchUrl + paramUrl;
  axios.get(apiUrl)
    .then((response) => {
      if (response.data.pagination.total_count < 5) {
        res.send('Sorry, your search had less than 5 results and cannot be displayed!');
      } else {
        const data = parseResp(response.data);
        res.json(data);
      }
    })
    .catch((err) => { `Error: ${err}`; });
};
export default getGiphy;