import axios from "axios"

class HttpClient {
  /**
   * Consulta Http por metodo GET.
   *
   * @param url String de consulta http
   * @param request parametros en formato JSON
   */
  post = async (url, data) => {
    const options = {
      method: "POST",
      data,
      url,
    }
    return await axios(options)
  }

  get = async (url, params) => {
    const response = await axios.get(url, params)
    return response
  }
}

export default new HttpClient()
