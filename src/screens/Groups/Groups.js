import Grid from "@mui/material/Grid"
import ListTodo from "./ListTodo"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useState } from "react"

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
const Groups = () => {
  const [task, setTask] = useState(initialTask)
  return (
    <DragDropContext onDragEnd={(result) => console.log(result)}>
      <Grid container>
        <Grid xs={12} sm={6} item sx={{ background: "red" }}>
          <Droppable droppableId="task">
            {(droppableProvider) => (
              <List
                {...droppableProvider.droppableProps}
                ref={droppableProvider.innerRef}
              >
                {task.map((item, index) => (
                  <Draggable
                    draggableId={`${item.id}-dbl`}
                    index={index}
                    key={item.id}
                  >
                    {(draggableProvider) => (
                      <ListItem
                        {...draggableProvider.dragHandleProps}
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.dragHandleProps}
                        disablePadding
                      >
                        <ListItemText primary={item.name} />
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {droppableProvider.placeholder}
              </List>
            )}
          </Droppable>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ background: "blue" }}>
          <List></List>
        </Grid>
      </Grid>
    </DragDropContext>
  )
}

export default Groups
