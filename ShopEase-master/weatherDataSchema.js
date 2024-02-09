const mongoose = require("mongoose");

const WeatherDataSchema = new mongoose.Schema(
  {
    location: { type: String },
    date: { type: String },
    temperature: { type: Number },
    humidity: { type: Number },
  },
  { collection: "weather_data" }
);

const WeatherData = mongoose.model("WeatherData", WeatherDataSchema);

module.exports = WeatherData;
