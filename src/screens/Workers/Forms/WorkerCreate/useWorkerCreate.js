import { useForm, useWatch } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import moment from "moment"
const useWorkerCreate = (props) => {
  const today = moment(new Date()).format("YYYY-MM-DD")
  const { control, handleSubmit, formState } = useForm({
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
          .min(3, "Debe contener un minimo de 3 caracteres"),
        lastName: yup
          .string()
          .required("Los apellidos son requerido")
          .matches(
            /([a-zA-Z])+([ a-zA-ZÀ-ÖØ-öø-ÿ])+$/,
            "Debe contener entre la a y la z"
          )
          .max(30, "Debe contener maximo 30 caracteres")
          .min(5, "Debe contener un minimo de 3 caracteres"),
        birthday: yup
          .date("La fecha debe ser un formato valido")
          .required("La fecha es requerida")
          .max(today, "no puede excederse del dia de hoy")
          .min("1940-01-01", "no puede excederse del dia de hoy"),
      })
    ),
    defaultValues: {
      name: "",
      lastName: "",
      birthday: today,
    },
    mode: "onChange",
  })
  const [name, lastName, birthday] = useWatch({
    control,
    name: ["name", "lastName", "birthday"],
  })

  const onSubmit = (value) => {
    const newVal = {
      ...value,
      birthday: moment(value.birthday).format("YYYY/MM/DD"),
    }
    console.log(newVal)
  }

  return { control, onSubmit, formState, handleSubmit }
}

export default useWorkerCreate
