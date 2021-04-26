const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay");

const { Client } = require("@googlemaps/google-maps-services-js");
const stripeClient = require("stripe")(functions.config().stripe.key);
const googleClient = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

exports.pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});

//? to secure an api key fun ->
// firebase functions:config:set google.key="you api key"
//? to get the functions config ->
// firebase functions:config:get
//? to get it for local use
// firebase functions:config:get > .runtimeconfig.json
//! ensure .runtimeconfig.json is added to git ignore
//? https://firebase.google.com/docs/functions/config-env
