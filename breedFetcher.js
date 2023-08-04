const request = require('request');

const {API} = require('./constants');


const fetchBreed = () => {
  const breed = process.argv.slice(2);
  if (!breed || breed.length !== 1) {
    console.log('Please provide one breed name at a time.');
    process.exit();
  }

  request(`${API}q=${breed[0]}`, (error, response, body) => {
    if (error) console.log('Request failed. Please try again.');

    const data = JSON.parse(body)[0];
    data ? console.log(data) : console.log('Breed not found.');
  });

};

fetchBreed();