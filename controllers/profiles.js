import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .populate('toVisit')
  .populate('visited')
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPeak(req, res){
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.toVisit.push(req.body)
    profile.save()
    .then(updatedProfile => {
      res.json(updatedProfile)
    })
  })
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
  show,
  addPeak 
}

