const fetchBreedDescription = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());
    });

    done();
  });

  it("it returns an error message for an invalid breed via callback", (done) => {
    fetchBreedDescription("orange", (err, desc) => {
      const expectedErr = "No cat was returned, try a new name";
      assert.equal(expectedErr, err);
      assert.equal(null, desc);
    });

    done();
  });


});
