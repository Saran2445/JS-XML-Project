// File: app.js
const express = require('express');
const path = require('path');
const { getTopTeams, getTeamStatistics, getStadiumLocation } = require('./api');

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
    const teamStats = await getTeamStatistics(teamId, '39', '2023');
    const stadiumLocation = await getStadiumLocation(teamStats.team.stadium, teamStats.team.city, teamStats.team.country);
    res.render('teamDetails', { title: teamStats.team.name, stats: teamStats, location: stadiumLocation });
  } catch (error) {
    res.status(500).render('error', { message: 'Error fetching team details' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});