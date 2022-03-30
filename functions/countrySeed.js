import { Country } from "../models/country.js"
import mongoose from "mongoose";
import fetch from "node-fetch";

const db = mongoose.connection

mongoose.connect('')

db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} for seeding at ${db.host}:${db.port}`)
})

let url = 'https://restcountries.com/v2/all'

let resultData;
let saveCounter = 0;

try{
  const response = await fetch(url);
  const json = await response.json();
  let resultData = [...json];

  for (let i = 0; i < resultData.length; i++) {

    let country = new Country({
      name: resultData[i].name,
      flag: resultData[i].flag,
      capital: resultData[i].capital,
      region: resultData[i].region,
      population: resultData[i].population,
    })

    country.save(() => {
      console.log('saved' + country)
      saveCounter++;
      if (saveCounter === resultData.length) {
        console.log('saved succesfully')
        .catch(error => console.log(error))
      }
    })
  } 
} catch (error) {
  console.log(error)
}

