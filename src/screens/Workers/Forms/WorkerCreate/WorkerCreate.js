import { Button, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { Box } from "@mui/material"
import useWorkerCreate from "./useWorkerCreate"
import sx from "./styles"
const WorkerCreate = () => {
  const { control, onSubmit, formState, handleSubmit } = useWorkerCreate()
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
