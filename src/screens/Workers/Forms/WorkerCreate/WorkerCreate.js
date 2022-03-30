import { Button, TextField } from "@mui/material"
import { Controller, useForm, useWatch } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import DatePicker from '@material-ui/pickers'
import * as yup from "yup"
import { Box } from "@mui/system"
import sx from "./styles"
const WorkerCreate = () => {
  const { control, setValue, handleSubmit, formState } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup
          .string()
          .required("El nombre es requerido")
          .matches(
            /([a-zA-Z])+([ a-zA-ZÀ-ÖØ-öø-ÿ])+$/,
            "Debe contener entre la a y la z"
          )
          .max(30, "Debe contener maximo 30 caracteres")
          .min(5, "Debe contener un minimo de 3 caracteres"),
        lastName: yup
          .string()
          .required("Los apellidos son requerido")
          .matches(
            /([a-zA-Z])+([ a-zA-ZÀ-ÖØ-öø-ÿ])+$/,
            "Debe contener entre la a y la z"
          )
          .max(30, "Debe contener maximo 30 caracteres")
          .min(5, "Debe contener un minimo de 3 caracteres"),
        birthday: yup.date().required(),
      })
    ),
    defaultValues: {
      year: "",
      make: "",
      model: "",
      version: "",
    },
    mode: "onChange",
  })
  const [name, lastName, birthday] = useWatch({
    control,
    name: ["name", "lastName", "birthday"],
  })

  return (
    <Box>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            sx={sx.field}
            placeholder="Nombre"
            label={`Nombre*`}
            value={field.value}
            isAllowed={({ value }) => value.length <= 5}
            onChange={field.onChange}
            fullWidth
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
            isAllowed={({ value }) => value.length <= 5}
            onChange={field.onChange}
            fullWidth
            error={fieldState.invalid}
          />
        )}
      />
      <Controller
        name="birthday"
        control={control}
        render={({ field, fieldState }) => (
          <DatePicker
            {...field}
            sx={sx.field}
            placeholder="Fecha de nacimiento"
            label={`Fecha de nacimiento*`}
            value={field.value}
            fullWidth
            onChange={field.onChange}
            error={fieldState.invalid}
            isAllowed={({ value }) => value.length <= 5}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
      <Button variant="contained" color="secondary" sx={sx.cta}>
        Guardar
      </Button>
    </Box>
  )
}

export default WorkerCreate
