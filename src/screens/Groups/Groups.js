import Grid from "@mui/material/Grid"
import ListTodo from "./ListTodo"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useState } from "react"
import ListSelected from "./ListSelected"

const Groups = () => {
  const [groups, setGroups] = useState([
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
  ])
  const [groupsSelected, setGroupsSelected] = useState([
    {
      id: 4,
      name: "List 4",
    },
    {
      id: 5,
      name: "List 5",
    },
    {
      id: 6,
      name: "List 6",
    },
  ])

  const onDragEnd = (val) => {
    // Your version
    // let result = helper.reorder(val.source, val.destination, taskList);
    // setTasks(result);

    /// A different way!
    const { draggableId, source, destination } = val

    // console.log("id", draggableId, "source", source, "destino", destination)
    if (destination.droppableId === "groups-selected" && groups.length) {
      const draggableChange = groups.find((item) => item.id == draggableId)
      const groupDescart = groups.filter((item) => item.id != draggableId)
      setGroupsSelected([...groupsSelected, draggableChange])
      setGroups([...groupDescart])
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container>
        <ListTodo task={groups} />
        <ListSelected task={groupsSelected} />
      </Grid>
    </DragDropContext>
  )
}

export default Groups
