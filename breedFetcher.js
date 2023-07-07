const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, reponse, body) => {
      if (error) {
        callback(error, null);
        process.exit();
      }

      const data = JSON.parse(body);

      if (data.length === 0 || data[0].description === undefined) {
        callback('No cat was returned, try a new name', null);
      } else {
        callback(null, data[0].description);
      }
    }
  );
};

module.exports = fetchBreedDescription;
