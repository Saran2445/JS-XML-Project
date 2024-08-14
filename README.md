# JS-XML-Project

# Football Statistics Website

## Overview

This Football Statistics Website provides users with an interactive platform to explore top football teams, access detailed team statistics, and view stadium locations on an interactive map. The application leverages the Football-API for comprehensive team and match data, and integrates Mapbox API for visualizing stadium locations.

## Features

- **Top Teams Display**: Browse a curated list of top teams from selected leagues
- **Detailed Team Statistics**: Access comprehensive stats including matches played, wins, losses, goals, and more
- **Interactive Stadium Map**: Visualize team stadium locations with an interactive Mapbox integration
- **Responsive Design**: Enjoy a seamless experience across various device size

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Templating**: Pug
- **APIs**: Football-API, Mapbox GL JS
- **HTTP Client**: Axios

## Prerequisites

Before you begin, ensure you have the following:

- Node.js (v12 or higher)
- npm (usually comes with Node.js)
- API key from Football-API
- Access token from Mapbox

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Install Dependencies

Install the necessary Node.js dependencies by running:

```bash
npm install
```

### Set up Environment Variables

Create a `.env` file in the project's root directory and fill it with your API keys:

```plaintext
FOOTBALL_API_KEY=your_football_api_key
MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
```

### Start the Server

Launch the server using:

```bash
npm start
```

This will activate the server on `http://localhost:3000`. Navigate to this URL in your browser to start using the application.

## Usage

1. **Home Page**: View the list of top teams from the selected league
2. **Team Details**: Click on a team to access detailed statistics
3. **Stadium Map**: Interact with the map on the team details page to explore the stadium location

## Acknowledgments

- Football-API for providing comprehensive football data
- Mapbox for their excellent mapping services   
