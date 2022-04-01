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
  IconButton,
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
    const { draggableId, source, destination } = val

    if (destination.droppableId === "groups-selected" && groups.length) {
      const draggableChange = groups.find((item) => item.id == draggableId)
      const groupDescart = groups.filter((item) => item.id != draggableId)
      setGroupsSelected([...groupsSelected, draggableChange])
      setGroups([...groupDescart])
    }
  }

  const requestSearch = (searchedVal) => {
    const groupsCopy = [...groups]
    const filteredGroups = groups.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase())
    })
    const filterGroup =
      searchedVal && groups.length ? filteredGroups : groupsCopy
    setGroups(filterGroup)
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
              {groups.length && <ListTodo task={groups} />}
              <ListSelected task={groupsSelected} />
            </Grid>
          </DragDropContext>
        </>
      )}
    </>
  )
}

export default Groups
