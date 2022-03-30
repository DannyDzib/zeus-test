/**
 * This method is a utility to lineal handling of promises that could possibly be rejected
 */
export const safePromise = async (promise) => {
  let result = null
  let error = null
  try {
    result = await promise
  } catch (err) {
    error = err
  }
  return {
    result,
    error,
  }
}
