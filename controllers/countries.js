import { Country } from "../models/country.js";

function index (req, res) {
  Country.find({})
  .then(countries => {
    res.json(countries)
  })
  .catch(err => {
    res.json(err)
  })
}

function show(req, res) {
  Country.findById(req.params.id)
  .then(country => res.json(country))
  .catch(err => res.json(err))
}

export {
  index,
  show,
}