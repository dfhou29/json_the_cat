const request = require('request');

const {API} = require('./constants');


const fetchBreedDescription = (breed, printRequestInfo) => {

  request(`${API}q=${breed}`, (error, response, body) => {

    let description = JSON.parse(body);

    if (description.length !== 0 && !error) {
      description = description[0].description;
    } else {
      error = "Breed not found.";
    }

    printRequestInfo(error, description);
  });

};

module.exports = {
  fetchBreedDescription
};