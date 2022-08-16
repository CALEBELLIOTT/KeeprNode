import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const KeepSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  views: { type: Number, required: true },
  kept: { type: Number, required: true },
  creatorId: { type: ObjectId, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

KeepSchema.virtual("creator", {
  localField: "creatorId",
  ref: "Account",
  foreignField: "id",
  justOne: true
})


// name, description, img, views, kept, creatorId

// virtual creator