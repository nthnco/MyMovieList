app.get('/getMovies', async (req, res) => {

  try {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles',
      headers: {
        'X-RapidAPI-Key': 'b4c3222b69msh063d7ee46dfbdb7p1fd1dfjsn0e10ed3e5cfc',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  res.render('pages/discover', { results });
  } catch (error) {
    // Handle errors and render discover.ejs with an empty results array and an error message
    res.render('pages/discover', { results: [], error: 'Failed to fetch events from Ticketmaster API.' });
  }});