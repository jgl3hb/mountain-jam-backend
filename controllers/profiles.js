import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
function show(req, res){
  console.log("It Works!!!!")
}

export { 
  index,
  show 
}

