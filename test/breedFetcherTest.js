const assert = require('chai').assert;
const {fetchBreedDescription} = require('../breedFetcher');
describe('Test for breedFetcher', () => {
  it('return description of Bombay for successful request.', (done) => {
    fetchBreedDescription('siberian', (error, description) => {

      assert.isNull(error);
      const expected = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(description.trim(), expected);
      done();

    })
  });

  it('return error for non-exist breed.', (done) => {
    fetchBreedDescription('siberianX', (error, description) => {

      assert.isEmpty(description);
      const expected = "Breed not found.";
      assert.equal(error, expected);
      done();

    })
  });
})