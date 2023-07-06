const request = require("request");

const args = process.argv.slice(2);
const breed = args.join("%20");

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, reponse, body) => {
    if (error) {
      console.log("error: ", error);
      process.exit;
    }

    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data.length === 0) {
      return console.log("No data returned, try another name");
    }

    
    console.log(data[0].description);
  }
);
