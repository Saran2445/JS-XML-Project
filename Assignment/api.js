const axios = require('axios');

// Football API configuration
const FOOTBALL_API_KEY = 'c8fadfa43ddf790574f6d79b1945951c';
const FOOTBALL_API_BASE_URL = 'https://v3.football.api-sports.io';

// Mapbox API configuration
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic2FyYW4yNDQ1IiwiYSI6ImNsemU5N2t4OTB1bDEybXEwNGtiOG52YmQifQ.WntS_WFfxXKlYZbMFs3GpQ';
const MAPBOX_API_BASE_URL = 'https://api.mapbox.com';

// Football API calls
const getTopTeams = async (league, season) => {
  try {
    const response = await axios.get(`${FOOTBALL_API_BASE_URL}/standings`, {
      params: { league, season },
      headers: {
        'x-rapidapi-key': FOOTBALL_API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    });
    return response.data.response[0].league.standings[0].slice(0, 10); // Top 10 teams
  } catch (error) {
    console.error('Error fetching top teams:', error);
    throw error;
  }
};

const getTeamStatistics = async (team, league, season) => {
  try {
    const response = await axios.get(`${FOOTBALL_API_BASE_URL}/teams/statistics`, {
      params: { team, league, season },
      headers: {
        'x-rapidapi-key': FOOTBALL_API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching team statistics:', error);
    throw error;
  }
};

// Mapbox API call
const getStadiumLocation = async (stadiumName, city, country) => {
  try {
    const query = `${stadiumName}, ${city}, ${country}`;
    const response = await axios.get(`${MAPBOX_API_BASE_URL}/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`, {
      params: {
        access_token: MAPBOX_ACCESS_TOKEN,
        limit: 1
      }
    });
    return response.data.features[0].center; // Returns [longitude, latitude]
  } catch (error) {
    console.error('Error fetching stadium location:', error);
    throw error;
  }
};

module.exports = {
  getTopTeams,
  getTeamStatistics,
  getStadiumLocation
};
