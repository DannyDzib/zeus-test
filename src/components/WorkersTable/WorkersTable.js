import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import sx from "./styles"
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import useWorkersTable from "./useWorkersTable"

const WorkersTable = (props) => {
  const { data = [], onClickAdd, textCta = "" } = props
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    requestSearch,
    page,
    rowsPerPage,
    rows,
  } = useWorkersTable(data)

  return (
    <Paper>
      <FormControl sx={sx.formControlSearch} variant="outlined">
        <InputLabel>Buscar</InputLabel>
        <OutlinedInput
          type="text"
          onChange={(searchVal) => requestSearch(searchVal.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant="contained"
        color="secondary"
        sx={sx.cta}
        onClick={onClickAdd}
      >
        {textCta}
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Nombre(s)</TableCell>
              <TableCell align="right">Apellidos</TableCell>
              <TableCell align="right">Fecha de nacimiento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow key={index} sx={sx.tableRow}>
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.last_name}</TableCell>
                  <TableCell align="right">{item.birthday}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
export default WorkersTable
