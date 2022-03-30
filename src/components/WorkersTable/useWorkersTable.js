import * as React from "react"

const useWorkersTable = (data) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [rows, setRows] = React.useState([])

  React.useEffect(() => {
    setRows(data)
  }, [data])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const requestSearch = (searchedVal) => {
    const filteredRows = data.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.last_name.toLowerCase().includes(searchedVal.toLowerCase())
      )
    })
    setRows(filteredRows)
    setPage(0)
  }

  return {
    handleChangePage,
    handleChangeRowsPerPage,
    requestSearch,
    page,
    rowsPerPage,
    rows,
  }
}

export default useWorkersTable
