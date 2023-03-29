/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const http = require('http');
const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=jsonp', function(error, response, body) {
    //console.log('error: 'error);
    console.log(body); // Print the response status code if a response was received
    //console.log('body:', body);
  });
    
};
console.log(fetchMyIP());
module.exports = { fetchMyIP };