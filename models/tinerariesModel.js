const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  collaborator: { type: String, required: true },
  profileImage: { type: String, required: true },
  imageOne: { type: String, required: true },
  imageTwo: { type: String, required: true },
  imageThree: { type: String, required: true },
  titleActivity: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  time: { type: String, required: true },
  hashtag: { type: String, required: true },
  idCity: { type: mongoose.Schema.Types.ObjectId, required: true },
  likes: { type: Number, required: true },
  language: { type: String, required: true },
  years: { type: String, required: true },
});

const Itinerary = mongoose.model("itinerarie", itinerarySchema);

module.exports = Itinerary;
