import * as yup from "yup";

export const ValidationSchemaForAdmin = yup.object().shape({
  name_operator: yup
    .string()
    .required("Обязательно для заполнения")
    .min(3, "Минимальное количество символов 3")
    .max(15, "Максимальное количество симоволов 15")
    .matches(/^\S*$/, "Уберите пробелы")
    .matches(/^[_A-zА-я]*((-|\s)*[_A-zА-я])*$/g, "Некорректное имя оператора"),
});
