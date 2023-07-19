const Routes = require("express").Router();

const itinerariesControllers = require("../controllers/itinerariesControllers");

const {
  getAllItineraries,
  getAllItinerariesInCity,
  getOneItinerary,
  modifyItinerary,
  addOneItinerary,
  addMultiplesItineraries,
  removeItinerary,
} = itinerariesControllers;

Routes.route("/itineraries")
  .get(getAllItineraries)
  .post((req, res) => {
    Array.isArray(req.body.data)
      ? addMultiplesItineraries(req, res)
      : addOneItinerary(req, res);
  });

Routes.route("/itineraries/:id")
  .get(getOneItinerary)
  .put(modifyItinerary)
  .delete(removeItinerary);

Routes.route("/itineraries/city/:idCity").get(getAllItinerariesInCity);

module.exports = Routes;
