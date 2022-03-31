import * as React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
import sx from "./styles"
const Loading = () => {
  return (
    <Box sx={sx.content}>
      <CircularProgress />
    </Box>
  )
}
export default Loading
