import * as React from "react"
import Container from "@mui/material/Container"
import Navbar from "../Navbar"

const Layoult = (props) => {
  const { children } = props
  return (
    <>
      <Navbar />
      <Container maxWidth="md">{children}</Container>
    </>
  )
}

export default Layoult
