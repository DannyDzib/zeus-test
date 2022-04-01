import Grid from "@mui/material/Grid"
import ListTodo from "./ListTodo"
import { DragDropContext } from "react-beautiful-dnd"
import { useState } from "react"
import ListSelected from "./ListSelected"
import { useQuery } from "react-query"
import { fetchGroups } from "clients/httpGroups"

const Groups = () => {
  const { isLoading, data } = useQuery("groups", fetchGroups)
  const [groups, setGroups] = useState(data || [])
  const [groupsSelected, setGroupsSelected] = useState([])

  const onDragEnd = (val) => {
    const { draggableId, source, destination } = val

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
