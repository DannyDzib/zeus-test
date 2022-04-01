import HttpClient from "./httpClient"
import AppSettings from "settings/api.settings"
import { safePromise } from "utils/utils"

export const fetchGroups = async () => {
  const response = await safePromise(
    HttpClient.get(`${AppSettings.ENDPOINT_GROUPS}/daniel`)
  )
  return response?.result?.data?.data.groups
}

export const createWorkers = async (data) => {
  const response = await safePromise(
    HttpClient.post(`${AppSettings.ENDPOINT_EMPLOYEES}/daniel`, data)
  )
  console.log(response)
  // return response?.result?.data?.data?.employees
}
