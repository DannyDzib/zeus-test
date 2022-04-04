import { List, ListItem, ListItemText, Grid } from "@mui/material"
import { Droppable, Draggable } from "react-beautiful-dnd"

const ListTodo = (props) => {
  const { groups } = props
  return (
    <Grid xs={12} sm={6} item>
      <Droppable droppableId="group">
        {(droppableProvider) => (
          <List
            ref={droppableProvider.innerRef}
            {...droppableProvider.droppableProps}
          >
            {groups.map((item, index) => (
              <Draggable
                draggableId={item.id.toString()}
                key={item.id}
                index={index}
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
            {droppableProvider.placeholder}
          </List>
        )}
      </Droppable>
    </Grid>
  )
}

export default ListTodo