const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);
const axios = require('axios');

const port = process.env.PORT || 4000;

// constants
//const BASE_URL = 'http://api.population.io:80/1.0/population/';
const BASE_URL = 'http://54.72.28.201/1.0/population/';
const COUNTRY = 'World';

io.on('connection', async (socket) => {
  getWorldPopulation();

  const youthPopulation = await getWorldAgePopulation(24);
  const agedPopulation = await getWorldAgePopulation(45);

  io.emit('youth population', youthPopulation);
  io.emit('aged population', agedPopulation);

  const populationData = await getWorldPopulationLast5Years();
  await getCountriesPopulationData(2019, 24);
  io.emit('population last 5 years', populationData);

  socket.on('fetch population data', ({age, year}) => {
    getCountriesPopulationData(year, age)
  })
});

const dateInISO = new Date().toISOString().split('T')[0];
const years = [
  {year: '2019', date: dateInISO},
  {year: '2018', date: '2018-12-31'},
  {year: '2017', date: '2017-12-31'},
  {year: '2016', date: '2016-12-31'},
  {year: '2015', date: '2015-12-31'},
  {year: '2014', date: '2014-12-31'}];


async function getWorldPopulationLast5Years() {
  let populationData = [];
  for (let year of years) {
    const {total_population} = await getCountryPopulationForYear(year.date, 'World');
    populationData = populationData.concat({
      year: year.year,
      population: total_population.population,
    })
  }
  return populationData;
}

async function getCountriesPopulationData(year, age) {
  const {data} = await axios.get(`${BASE_URL}${year}/aged/${age}/`)
  io.emit('countries population data', data)
}

async function getWorldPopulation() {
  const {data} = await axios.get(`${BASE_URL}${COUNTRY}/today-and-tomorrow/`);
  const [today, tomorrow] = data.total_population;
  io.emit('world population', {today, tomorrow})
}

async function getWorldAgePopulation(age) {
  const {data} = await axios.get(`${BASE_URL}2019/World/${age}/`);
  return data;
}

async function getCountryPopulationForYear(year, country) {
  const {data} = await axios.get(`${BASE_URL}${country}/${year}/`);
  return data;
}


http.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
