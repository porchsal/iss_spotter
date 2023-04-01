const request = require('request-promise-native');
const { fetchCoordsByIp } = require('./iss');

const fetchMyIP = function () {
    return request('https://api.ipify.org?format=json'); 
}

const fetchCoordsByIP = function(body) {
    const ip = JSON.parse(body).ip;
    return request(`http://ipwho.is/${ip}`);
}


const fetchISSFlyOverTimes = function(coord) {
    const { latitude, longitude } = JSON.parse(coord);
    const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
    return request(url);

}




module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };