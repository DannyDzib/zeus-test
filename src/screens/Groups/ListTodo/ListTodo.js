import { useState } from "react"
import { List, ListItem, ListItemText, Grid } from "@mui/material"
import { Droppable, Draggable } from "react-beautiful-dnd"

export default function Card(props) {
  const { task } = props
  return (
    <Droppable droppableId="group">
      {(droppableProvider) => (
        <Grid xs={12} sm={6} item>
          <List
            ref={droppableProvider.innerRef}
            {...droppableProvider.droppableProps}
          >
            {task.map((item, index) => (
              <Draggable
                draggableId={item.id.toString()}
                key={item.id}
                index={item.id}
              >
                {(draggableProvider, snapshot) => (
                  <ListItem
                    ref={draggableProvider.innerRef}
                    {...draggableProvider.draggableProps}
                    {...draggableProvider.dragHandleProps}
                    disablePadding
                  >
                    <ListItemText primary={item.name} />
                  </ListItem>
                )}
              </Draggable>
            ))}
          </List>
          {droppableProvider.placeholder}
        </Grid>
      )}
    </Droppable>
  )
}
