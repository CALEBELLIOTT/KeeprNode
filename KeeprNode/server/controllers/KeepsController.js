import { Auth0Provider } from "@bcwdev/auth0provider";
import { keepsService } from "../services/KeepsService";
import BaseController from "../utils/BaseController";

export class KeepsController extends BaseController {
  constructor() {
    super('api/keeps')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createKeep)
  }

  async createKeep(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      await keepsService.createKeep(req.body)
    } catch (error) {
      next.error
    }
  }
}