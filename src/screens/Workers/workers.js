import { useQuery } from "react-query"
import { fetchWorkers } from "clients/httpWorkers"
import { useModal } from "components/Modal"
import WorkersTable from "components/WorkersTable"
import WorkerCreate from "./Forms/WorkerCreate"
import Loading from "components/Loading"

const Workers = () => {
  const { handleOpenModal  } = useModal()
  const { isLoading, data: workers } = useQuery("workers", fetchWorkers)

  const handleClickFormAdd = () => {
    handleOpenModal({
      title: "Agregar empleado",
      body: <WorkerCreate />,
      configProps: {
        showClose: true,
        scroll: "body",
        isDividerHeader: true,
      },
    })
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WorkersTable
          data={workers}
          onClickAdd={handleClickFormAdd}
          textCta="Agregar empleado"
        />
      )}
    </>
  )
}

export default Workers
