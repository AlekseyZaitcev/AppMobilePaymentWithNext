import { useRouter } from "next/router";
import { useState } from "react";
import FormMobilePayment from "../styles/components/form/FormMobilePayment";
import Title from "../styles/components/title/Title";
import validationShema from "../validationSchemas/ValidationSchema";
import InputForm from "../styles/components/input/MaskedInput";
import { Formik, Form } from "formik";
import Error from "../styles/message/error/Error";
import FormButton from "../styles/components/button/FormButton";
import SuccessMessage from "../styles/message/success/SuccessMessage";
import Link from "next/link";

export default function FormPay() {
  const redirect = useRouter();
  const { query } = useRouter();
  const [isDataSended, setIsDataSended] = useState<boolean | undefined>();

  return (
    <FormMobilePayment>
      <Title>{query.operatorFormPay}</Title>
      <Formik
        initialValues={{ phoneInput: "", payInput: "" }}
        validateOnBlur
        onSubmit={(item) => {
          if (Math.floor(Math.random() * 2)) {
            setIsDataSended(true);
            setTimeout(() => redirect.push("/"), 2000);
          } else {
            setIsDataSended(false);
          }
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
        }) => (
          <Form>
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
              placeholder="Введите сумму от 1Р до 1000Р"
            />
            {touched.payInput && errors.payInput && (
              <Error>{errors.payInput}</Error>
            )}
            <FormButton
              type="submit"
              disabled={!isValid || isDataSended}
              onClick={() => handleSubmit}
            >
              Отправить
            </FormButton>
            <Link href="/">
              <FormButton>Назад</FormButton>
            </Link>
            {isDataSended === true && (
              <SuccessMessage>Пополнение успешно выполнено!</SuccessMessage>
            )}
            {isDataSended === false && (
              <Error>Ошибка отправки данных. Попробуйте ещё раз!</Error>
            )}
          </Form>
        )}
      </Formik>
    </FormMobilePayment>
  );
}
