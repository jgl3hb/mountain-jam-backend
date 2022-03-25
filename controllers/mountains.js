import { Mountain } from "../models/mountain.js";

function index (req, res) {
  Mountain.find({})
  .then(mountains => {
    res.json(mountains)
  })
  .catch(err => {
    res.json(err)
  })
}

function show(req, res) {
  Mountain.findById(req.params.id)
  .then(mountain => res.json(mountain))
  .catch(err => res.json(err))
}

export {
  index, 
  show,
}