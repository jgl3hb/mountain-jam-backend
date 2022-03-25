import { Mountain } from "../models/mountain"

let url = 'peakclimber.com/api/peaks/'



for (let i = 1525; i < 5587; i++) {
  Mountain.create()
  .then(mountain => res.json(mountain))
  .catch(err => res.json(err))
}