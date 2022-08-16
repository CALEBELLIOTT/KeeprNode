import { dbContext } from "../db/DbContext"

class KeepsService {
  async createKeep(body) {
    const keep = await dbContext.Keep.create(body)
    await keep.populate('creator')
    return keep
  }

}

export const keepsService = new KeepsService()