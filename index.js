const {fetchBreedDescription} = require('./breedFetcher');

const arg = process.argv.slice(2);

if (!arg || arg.length !== 1) {
  console.log('Please provide one breed name at a time.');
  process.exit();
}

const breed = arg[0];

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(description);
  }
});

