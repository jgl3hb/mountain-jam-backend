import mongoose from "mongoose";

const Schema = mongoose.Schema

const commentSchema = new Schema({
  visitDate: {
    type: Date,
    default: function() {
      return new Date().toLocaleString().split(',')[0]
    }
  },
  comment: {
    type: String,
    required: true,
  },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  photo: {type: String},
}, {
  timestamps: true
})


const mountainSchema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  elevation: Number,
  countries: [String],
  range: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  photo: {type: String},
  comments: [commentSchema],
}, {
  timestamps: true
})

const Mountain = mongoose.model('Mountain', mountainSchema)

export {
  Mountain
}