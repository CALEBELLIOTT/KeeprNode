import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const VaultSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  isPrivate: { type: Boolean, default: false },
  creatorId: { type: ObjectId, required: true }
})

VaultSchema.virtual("creator", {
  localField: "creatorId",
  ref: "Account",
  foreignField: "id",
  justOne: true
})

//     public int Id { get; set; }
// public string Name { get; set; }
// public string Description { get; set; }
// public string Img { get; set; }
// public bool IsPrivate { get; set; }
// public string CreatorId { get; set; }
// public Profile Creator { get; set; }