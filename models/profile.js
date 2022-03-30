import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  visited:[{type: mongoose.Schema.Types.ObjectId, ref: "Mountain"}],
  toVisit:[{type: mongoose.Schema.Types.ObjectId, ref: "Mountain"}]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
