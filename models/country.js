import mongoose from "mongoose";

const Schema = mongoose.Schema

const countrySchema = new Schema({
  name: String,
  flag: String,
  capital: String,
  region: String,
  population: Number,
}, {
  timestamps: true
})

const Country = mongoose.model('Country', countrySchema)

export {
  Country
}