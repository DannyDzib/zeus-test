import { useState } from "react"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import { Draggable } from "react-beautiful-dnd"

const initialTask = [
  {
    id: 1,
    name: "List 1",
  },
  {
    id: 2,
    name: "List 2",
  },
  {
    id: 3,
    name: "List 3",
  },
]
export default function Card() {
  const [task, setTask] = useState(initialTask)
  return (
    <Box>
      
    </Box>
  )
}
