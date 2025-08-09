const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    // Option 1: Use local exported collection JSON file
    // collection: require("./collection.json"),

    // Option 2: Use Postman API URL (uncomment if you want to fetch latest from Postman)
    collection: `https://api.getpostman.com/collections/${process.env.COLLECTION_UID}?apikey=${process.env.POSTMAN_API_KEY}`,

    // Optional: add environment file
    // environment: require('./environment.json'),

    reporters: ["cli", "htmlextra"],
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // Path to save HTML report
        title: "dMoney API Test Report",
        darkTheme: true,
      },
    },
    iterationCount: 1,
    insecure: true, // Skip SSL certificate verification
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("Collection run complete!");
  }
);
