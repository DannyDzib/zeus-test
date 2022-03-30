import HttpClient from "./httpClient"
import AppSettings from "settings/api.settings"
import { safePromise } from "utils/utils"

export const fetchWorkers = async () => {
  const response = await safePromise(HttpClient.get(
    `${AppSettings.ENDPOINT_EMPLOYEES}/daniel`
  ))
  return response?.result?.data?.data?.employees
}
