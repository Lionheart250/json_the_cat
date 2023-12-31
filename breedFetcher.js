const results = [
  // Breed information objects...
];

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Breed "${breedName}" not found.`, null);
      } else {
        const breed = data[0];
        callback(null, breed.description);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};



