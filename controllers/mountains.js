import { Mountain } from "../models/mountain.js";
import { v2 as cloudinary } from 'cloudinary'

function index (req, res) {
  Mountain.find({})
  .then(mountains => {
    res.json(mountains)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  if (req.body.photo === 'undefined' || ! req.files
  ['photo']) {
    delete req.body['photo']
    Mountain.create(req.body)
    .then(mountain => {
      mountain.populate('owner')
      .then(populatedMountain => {
        res.status(201).json(populatedMountain)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  } else {
    const imageFile = req.files.photo.path
    cloudinary.uploader.upload(imageFile, {tags: `${req.body.name}`})
    .then(image => {
      req.body.photo = image.url
      Mountain.create(req.body)
      .then(mountain => {
        mountain.populate('owner')
        .then(populatedMountain => {
          res.status(201).json(populatedMountain)
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
    })
  }
}

function deleteMountain(req, res) {
  Mountain.findByIdAndDelete(req.params.id)
  .then(mountain => res.json(mountain))
  .catch(err => res.json(err))
}



function show(req, res) {
  Mountain.findById(req.params.id)
  .then(mountain => res.json(mountain))
  .catch(err => res.json(err))
}

export {
  index, 
  show,
  create,
}