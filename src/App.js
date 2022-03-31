import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { GlobalStyles } from "@mui/styled-engine"
import { ModalProvider } from "components/Modal/ModalProvider"
import { Modal } from "components/Modal"
import Layout from "components/Layout"
import theme from "themes/theme"
import routes from "navigation/routes"
import styles from "themes/styles"

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={createTheme(theme)}>
          <ModalProvider>
            <Modal />
            <Layout>
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Layout>
          </ModalProvider>
        </ThemeProvider>
        <GlobalStyles styles={styles} />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
