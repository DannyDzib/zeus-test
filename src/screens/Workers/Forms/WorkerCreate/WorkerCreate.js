import { Button, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { Box } from "@mui/material"
import useWorkerCreate from "./useWorkerCreate"
import { createWorkers } from "clients/httpWorkers"
import { useMutation, useQueryClient } from "react-query"
import sx from "./styles"
import moment from "moment"
import { useModal } from "components/Modal"
const WorkerCreate = () => {
  const queryClient = useQueryClient()
  const { control, formState, handleSubmit } = useWorkerCreate()
  const { handleCloseModal } = useModal()
  const { mutate } = useMutation(createWorkers, {
    onSuccess: () => queryClient.invalidateQueries("workers"),
  })

  const onSubmit = async (value) => {
    const newVal = {
      ...value,
      birthday: moment(value.birthday).format("YYYY/MM/DD"),
      last_name: value.lastName,
    }
    mutate(newVal, {
      onSuccess: () => handleCloseModal(),
    })
  }

  return (
    <Box>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            sx={sx.field}
            placeholder="Nombre(s)"
            label={`Nombre(s)*`}
            value={field.value}
            isallowed={({ value }) => value.length <= 5}
            onChange={field.onChange}
            fullWidth
            helperText={fieldState?.error?.message || ""}
            error={fieldState.invalid}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            sx={sx.field}
            placeholder="Apellidos"
            label={`Apellidos*`}
            value={field.value}
            isallowed={({ value }) => value.length <= 5}
            onChange={field.onChange}
            fullWidth
            helperText={fieldState?.error?.message || ""}
            error={fieldState.invalid}
          />
        )}
      />
      <Controller
        name="birthday"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            sx={sx.field}
            fullWidth
            type="date"
            placeholder="Fecha de nacimiento"
            label={`Fecha de nacimiento*`}
            value={field.value}
            isallowed={({ value }) => value.length <= 5}
            onChange={field.onChange}
            helperText={fieldState?.error?.message || ""}
            error={fieldState.invalid}
          />
        )}
      />
      <Button
        variant="contained"
        color="secondary"
        sx={sx.cta}
        onClick={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      >
        Guardar
      </Button>
    </Box>
  )
}

export default WorkerCreate
