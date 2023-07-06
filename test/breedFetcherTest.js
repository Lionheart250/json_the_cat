const { fetchBreedDescription } = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetchBreedDescription', function() {
  it('returns a string description for a valid breed, via callback', function(done) {
    fetchBreedDescription('Siberian', function(err, desc) {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error for an invalid breed, via callback', function(done) {
    fetchBreedDescription('InvalidBreed', function(err, desc) {
      // we expect an error for this scenario
      assert.notEqual(err, null);

      const expectedError = 'Breed "InvalidBreed" not found.';

      // compare returned error message
      assert.equal(err, expectedError);

      done();
    });
  });
});
