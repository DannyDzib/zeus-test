import { useState } from "react"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"

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
      <List>
        {task.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
