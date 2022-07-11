import * as yup from "yup";

export const ValidationSchemaForAdmin = yup.object().shape({
  name_operator: yup.string().required("Обязательно для заполнения"),
});
