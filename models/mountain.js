import mongoose from "mongoose";

const Schema = mongoose.Schema

const mountainSchema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  elevation: Number,
  countries: [String],
  range: String,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {
  timestamps: true
})

const Mountain = mongoose.model('Mountain', mountainSchema)

export {
  Mountain
}