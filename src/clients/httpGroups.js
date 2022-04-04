import HttpClient from "./httpClient"
import AppSettings from "settings/api.settings"
import { safePromise } from "utils/utils"

export const fetchGroups = async () => {
  const response = await safePromise(
    HttpClient.get(`${AppSettings.ENDPOINT_GROUPS}/daniel`)
  )
  return response?.result?.data?.data.groups
}
