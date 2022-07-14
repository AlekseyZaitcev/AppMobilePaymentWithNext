import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormMobilePayment } from "../../src/styles/components/form/FormMobilePayment";
import { Title } from "../../src/styles/components/title/Title";
import { validationShema } from "../../src/validationSchemas/ValidationSchema";
import { InputForm } from "../../src/styles/components/input/InputForm";
import { Formik, Form } from "formik";
import { Error } from "../../src/styles/message/error/Error";
import { FormButton } from "../../src/styles/components/button/FormButton";
import { SuccessMessage } from "../../src/styles/message/success/SuccessMessage";
import Link from "next/link";
import { QueryStatus } from "../../src/constans/constans";
import { Loader } from "../../src/styles/components/loader/Loader";

const FormPay: React.FC = () => {
  const redirect = useRouter();
  const { query } = useRouter();
  const [isDataSended, setIsDataSended] = useState<QueryStatus | undefined>();

  const isQueryFulfilled = isDataSended === QueryStatus.FULFILLED;
  const isQueryRejected = isDataSended === QueryStatus.REJECTED;
  const isQueryPending = isDataSended === QueryStatus.PENDING;

  return (
    <FormMobilePayment>
      <Formik
        initialValues={{ phoneInput: "", payInput: "" }}
        validateOnBlur
        onSubmit={() => {
          setIsDataSended(QueryStatus.PENDING);
          setTimeout(() => {
            if (Math.floor(Math.random() * 2)) {
              setIsDataSended(QueryStatus.FULFILLED);
              setTimeout(() => redirect.push("/"), 2000);
            } else {
              setIsDataSended(QueryStatus.REJECTED);
            }
          }, 1000);
        }}
        validationSchema={validationShema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) =>
          !isQueryPending ? (
            <Form>
              <Title>{query.operatorFormPay}</Title>
              <InputForm
                mask={"+7 \\ 999 999 99 99"}
                alwaysShowMask={true}
                type="tel"
                name="phoneInput"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneInput}
                placeholder="Введите номер телефона"
              />
              {touched.phoneInput && errors.phoneInput && (
                <Error>{errors.phoneInput}</Error>
              )}
              <InputForm
                mask={""}
                type="number"
                name="payInput"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.payInput}
                placeholder="Введите сумму"
              />
              {touched.payInput && errors.payInput && (
                <Error>{errors.payInput}</Error>
              )}
              <FormButton
                type="submit"
                disabled={!isValid || isQueryFulfilled}
                onClick={() => handleSubmit}
              >
                Отправить
              </FormButton>
              <Link href="/">
                <FormButton disabled={isQueryFulfilled}>Назад</FormButton>
              </Link>
              {isQueryFulfilled && (
                <SuccessMessage>Пополнение успешно выполнено!</SuccessMessage>
              )}
              {isQueryRejected && <Error>Ошибка отправки данных!</Error>}
            </Form>
          ) : (
            <Loader />
          )
        }
      </Formik>
    </FormMobilePayment>
  );
};

export default FormPay;
