import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const VaultKeepSchema = new Schema({
  creatorId: { type: ObjectId, required: true },
  keepId: { type: ObjectId, required: true },
  vaultId: { type: ObjectId, required: true }
})

VaultKeepSchema.virtual("creator", {
  localField: "creatorId",
  ref: "Account",
  foreignField: "id",
  justOne: true
})

VaultKeepSchema.virtual("keep", {
  localField: "keepId",
  ref: "Keep",
  foreignField: "id",
  justOne: true
})

VaultKeepSchema.virtual("vault", {
  localField: "vaultId",
  ref: "Vault",
  foreignField: "id",
  justOne: true
})


// public int Id { get; set; }
// public string CreatorId { get; set; }
// public int KeepId { get; set; }
// public int VaultId { get; set; }
