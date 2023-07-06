const fetchBreedDescription = require('./breedFetcher');

const args = process.argv.slice(2);
const breed = args[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});



