import { useState } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { Grid } from "@mui/material"

export default function Card(props) {
  const [checked, setChecked] = useState([0])
  const { groups } = props

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  return (
    <Droppable droppableId="groups-selected">
      {(droppableProvider) => (
        <Grid
          xs={12}
          sm={6}
          item
          sx={{ border: "1px solid grey", borderRadius: 2 }}
        >
          <List
            ref={droppableProvider.innerRef}
            {...droppableProvider.droppableProps}
          >
            {groups.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(item.id)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(item.id) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": item.id }}
                    />
                  </ListItemIcon>
                  <ListItemText id={item.id} primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {droppableProvider.placeholder}
        </Grid>
      )}
    </Droppable>
  )
}
