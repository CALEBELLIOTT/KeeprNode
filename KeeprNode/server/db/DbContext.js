import mongoose, { mongo, MongooseError } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { KeepSchema } from "../models/Keep";
import { ValueSchema } from '../models/Value'
import { VaultSchema } from "../models/Vault";
import { VaultKeepSchema } from "../models/VaultKeep";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Vault = mongoose.model('Vault', VaultSchema);
  Keep = mongoose.model("Keep", KeepSchema);
  VaultKeep = mongoose.model("VaultKeep", VaultKeepSchema)
}

export const dbContext = new DbContext()
