import Grid from "@mui/material/Grid"
import ListTodo from "./ListTodo"
import { DragDropContext } from "react-beautiful-dnd"
import { useEffect, useState } from "react"
import ListSelected from "./ListSelected"
import { useQuery } from "react-query"
import { fetchGroups } from "clients/httpGroups"
import Loading from "components/Loading"
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

const Groups = () => {
  const { isLoading, data } = useQuery("groups", fetchGroups)
  const [groups, setGroups] = useState([])
  const [groupsSelected, setGroupsSelected] = useState([])
  useEffect(() => {
    setGroups(data || [])
  }, [data])
  const onDragEnd = (val) => {
    const { draggableId, destination } = val
    const isExisting = groupsSelected.find((item) => item.id == draggableId)
    if (destination.droppableId === "groups-selected" && groups.length && !isExisting) {
      const draggableChange = groups.find((item) => item.id == draggableId)
      setGroupsSelected([...groupsSelected, draggableChange])
    }
  }

  const requestSearch = (searchedVal) => {
    const groupsCopy = groups
    console.log(groupsCopy)
    console.log(groupsCopy)
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FormControl variant="outlined">
            <InputLabel>Buscar</InputLabel>
            <OutlinedInput
              type="text"
              onChange={(searchVal) => requestSearch(searchVal.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <SearchOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid container>
              <ListTodo groups={groups} />
              <ListSelected groups={groupsSelected} />
            </Grid>
          </DragDropContext>
        </>
      )}
    </>
  )
}

export default Groups
