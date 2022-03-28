import { Mountain } from "../models/mountain.js"
import mongoose from "mongoose";
import fetch from "node-fetch";

const db = mongoose.connection


db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} for seeding at ${db.host}:${db.port}`)
})

let url = 'http://peakclimber.com/api/peaks/'
let resultData = [];

try{
  for (let i = 4668; i < 5587; i++) {
    const response = await fetch(url + i);
    const json = await response.json();
    resultData.push(json);
    const countries = []
    resultData[i-4668].country.forEach(country => {
      countries.push(country.name)
    });
    let range 
    if (resultData[i-4668].range) {
      if (resultData[i-4668].range.parent) {
        range = resultData[i-4668].range.parent.name
      } else if (resultData[i-4668].range?.name) {
        range = resultData[i-4668].range.name
      } 
    }
    let mountain = new Mountain ({
      name: resultData[i-4668].name,
      latitude: resultData[i-4668].latitude,
      longitude: resultData[i-4668].longitude,
      elevation: resultData[i-4668].elevation,
      countries: countries,
      range: range,
    })
    mountain.save(() => {
      console.log('saved' + mountain)
    })
  } 
} catch (error) {
  console.log(error)
}