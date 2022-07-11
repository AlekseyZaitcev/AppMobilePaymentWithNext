import * as yup from "yup";

const ValidationSchemaForAdmin = yup.object().shape({
  name_operator: yup.string().required("Обязательно для заполнения"),
});

export default ValidationSchemaForAdmin;
