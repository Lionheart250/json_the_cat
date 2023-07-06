const request = require('request');

// Assuming you have the data stored in a variable called 'results'
const results = [
  {
    weight: {
      imperial: "8 - 16",
      metric: "4 - 7"
    },
    id: "sibe",
    name: "Siberian",
    cfa_url: "http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx",
    vetstreet_url: "http://www.vetstreet.com/cats/siberian",
    vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/siberian",
    temperament: "Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate",
    origin: "Russia",
    country_codes: "RU",
    country_code: "RU",
    description: "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ",
    life_span: "12 - 15",
    indoor: 0,
    lap: 1,
    alt_names: "Moscow Semi-longhair, HairSiberian Forest Cat",
    adaptability: 5,
    affection_level: 5,
    // ...
  }
];

const jsonStr = JSON.stringify(results); // Convert object to JSON string
const data = JSON.parse(jsonStr); // Convert JSON string back to object
const firstEntry = data[0];


// Retrieve the breed name from command-line arguments
const breedName = process.argv[2];

// Find the entry in the data array that matches the specified breed name
const breedEntry = data.find(entry => entry.name.toLowerCase() === breedName.toLowerCase());

// Check if a breed entry was found
if (breedEntry) {
  console.log("Description:", breedEntry.description);
} else {
  console.log("Breed not found!");
}



// Accessing specific properties of the first result object
console.log(data);
console.log(typeof data);
console.log("Description:", firstEntry.description);
// ...

// You can access other properties in a similar way.