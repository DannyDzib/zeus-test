export const DevEnviroment = {
  production: false,
  api: process.env.REACT_APP_PUBLIC_API,
  endpoint: {
    employess: "/employees",
    groups: "/groups",
  },
}
