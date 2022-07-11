import React from "react";
import { AddNewOperatorInListProps } from "../interfaces/interfaces";
import AdminPanel from "../styles/components/panel/AdminPanel";
import InputAdminPanel from "../styles/components/input/inputAdminPanel";
import ButtonForAdminPanel from "../styles/components/button/ButtonForAdminPanel";
import { Formik } from "formik";
import { Form } from "formik";
import ValidationSchemaForAdmin from "../validationSchemas/ValidationSchemaForAdmin";
ValidationSchemaForAdmin;
import Error from "../styles/message/error/Error";

const AdminMode: React.FC<AddNewOperatorInListProps> = ({
  addNewOperatorInList,
}) => {
  return (
    <AdminPanel>
      <h2>Панель</h2>
      <Formik
        initialValues={{ name_operator: "" }}
        validateOnBlur
        onSubmit={(item) => {
          const createNewOperator = {
            id_operator: Date.now(),
            ...item,
          };
          addNewOperatorInList(createNewOperator);
        }}
        validationSchema={ValidationSchemaForAdmin}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <Form>
            <InputAdminPanel
              value={values.name_operator}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name_operator"
            ></InputAdminPanel>
            {touched.name_operator && errors.name_operator && (
              <Error>{errors.name_operator}</Error>
            )}
            <ButtonForAdminPanel
              disabled={!isValid}
              type="submit"
              onClick={() => handleSubmit}
            >
              Добавить оператора
            </ButtonForAdminPanel>
          </Form>
        )}
      </Formik>
    </AdminPanel>
  );
};

export default AdminMode;
