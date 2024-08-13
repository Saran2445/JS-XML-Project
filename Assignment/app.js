// File: app.js
const express = require('express');
const path = require('path');
const { getTopTeams, getTeamStatistics, getTeamDetails, getStadiumLocation } = require('./api');

const app = express();
const port = process.env.PORT || 3000;

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', async (req, res) => {
  try {
    const topTeams = await getTopTeams('39', '2023'); // Premier League, 2023 season
    res.render('home', { title: 'Top Football Teams', teams: topTeams });
  } catch (error) {
    res.status(500).render('error', { message: 'Error fetching top teams' });
  }
});

app.get('/team/:id', async (req, res) => {
  try {
    const teamId = req.params.id;
    const [teamStats, teamDetails] = await Promise.all([
      getTeamStatistics(teamId, '39', '2023'),
      getTeamDetails(teamId)
    ]);

    console.log('Team Stats:', JSON.stringify(teamStats, null, 2));
    console.log('Team Details:', JSON.stringify(teamDetails, null, 2));

    const stadium = teamDetails.venue.name;
    const city = teamDetails.venue.city;
    const country = teamDetails.team.country;

    console.log('Stadium:', stadium);
    console.log('City:', city);
    console.log('Country:', country);

    let stadiumLocation = null;
    if (stadium && city && country) {
      stadiumLocation = await getStadiumLocation(stadium, city, country);
    } else {
      console.error('Missing team location information');
    }

    console.log('Stadium Location:', stadiumLocation);

    res.render('teamDetails', { 
      title: teamStats.team.name, 
      stats: teamStats, 
      details: teamDetails,
      location: stadiumLocation 
    });
  } catch (error) {
    console.error('Error fetching team details:', error);
    res.status(500).render('error', { message: 'Error fetching team details' });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
