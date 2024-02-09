// const mongoose = require("mongoose");
// const WeatherData = require("./weatherDataSchema.js");

// mongoose.connect("mongodb://127.0.0.1:27017/reactdata", {
//   dbName: "reactdata",
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const insertWeatherData = async () => {
//   // input the weather data for each location
//   const weatherData = [
//     {
//       location: "Parks Library",
//       date: "2023-05-01",
//       temperature: 25,
//       humidity: 50,
//     },
//     {
//       location: "Parks Library",
//       date: "2023-05-02",
//       temperature: 26,
//       humidity: 55,
//     },
//     {
//       location: "Parks Library",
//       date: "2023-05-03",
//       temperature: 27,
//       humidity: 60,
//     },
//     {
//       location: "Parks Library",
//       date: "2023-05-04",
//       temperature: 28,
//       humidity: 65,
//     },
//     {
//       location: "Parks Library",
//       date: "2023-05-05",
//       temperature: 29,
//       humidity: 70,
//     },
//     {
//       location: "State Gym",
//       date: "2023-05-01",
//       temperature: 15,
//       humidity: 40,
//     },
//     {
//       location: "State Gym",
//       date: "2023-05-02",
//       temperature: 16,
//       humidity: 45,
//     },
//     {
//       location: "State Gym",
//       date: "2023-05-03",
//       temperature: 17,
//       humidity: 50,
//     },
//     {
//       location: "State Gym",
//       date: "2023-05-04",
//       temperature: 18,
//       humidity: 55,
//     },
//     {
//       location: "State Gym",
//       date: "2023-05-05",
//       temperature: 19,
//       humidity: 60,
//     },
//   ];

//   try {
//     // Insert the weather data into the database
//     await WeatherData.insertMany(weatherData);
//     console.log("Weather data inserted successfully");
//   } catch (error) {
//     console.error("Error while inserting weather data:", error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// };

// insertWeatherData();
