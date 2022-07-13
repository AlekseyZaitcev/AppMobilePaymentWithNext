import React from "react";
import { AddNewOperatorInListProps } from "../interfaces/interfaces";
import { OperatorPanel } from "../styles/components/panel/OperatorPanel";
import { ButtonForAdminPanel } from "../styles/components/button/ButtonForAdminPanel";
import { Formik } from "formik";
import { Form } from "formik";
import { ValidationSchemaForAdmin } from "../validationSchemas/ValidationSchemaForAdmin";
import { Error } from "../styles/message/error/Error";
import { Title } from "../styles/components/title/Title";
import { InputPanel } from "../styles/components/input/InputPanel";

const AddOperatorPanel: React.FC<AddNewOperatorInListProps> = ({
  addNewOperatorInList,
}) => {
  return (
    <OperatorPanel>
      <Title>Добавить оператора</Title>
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
            <InputPanel
              value={values.name_operator}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name_operator"
            />
            {touched.name_operator && errors.name_operator && (
              <Error>{errors.name_operator}</Error>
            )}
            <ButtonForAdminPanel
              disabled={!isValid}
              type="submit"
              onClick={() => handleSubmit}
            >
              Добавить
            </ButtonForAdminPanel>
          </Form>
        )}
      </Formik>
    </OperatorPanel>
  );
};

export default AddOperatorPanel;
