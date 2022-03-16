import { Service } from "./service.js";

export class Controller {
  constructor(){
    this.service = new Service()
  }

  async getFileStrem(filename) {
    return this.service.getFileStream(filename)
  }
}
