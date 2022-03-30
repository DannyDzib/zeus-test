import { DevEnviroment as Enviroment } from "./dev.env"

class ApiSettings {
  constructor() {
    this.API_URL = Enviroment.api
    this.ENDPOINT_EMPLOYEES = this.API_URL + Enviroment.endpoint.employess
    this.ENDPOINT_GROUPS = this.API_URL + Enviroment.endpoint.groups
  }
}
export default new ApiSettings()
