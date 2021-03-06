import { settingsMobilePayData } from "../src/interfaces/interfaces";
import { FormMobilePayment } from "../src/styles/components/form/FormMobilePayment";
import { Title } from "../src/styles/components/title/Title";
import Link from "next/link";
import { LinkOperator } from "../src/styles/components/link/LinkOperator";
import React, { useState } from "react";
import AddOperatorPanel from "../src/AddOperatorPanel/AddOperatorPanel";

const Index: React.FC = () => {
  const [OperatorsForMobileApp, setOperatorsForMobileApp] = useState<
    Array<settingsMobilePayData>
  >([
    { id_operator: 1, name_operator: "Билайн" },
    { id_operator: 2, name_operator: "МТС" },
    { id_operator: 3, name_operator: "Мегафон" },
  ]);

  const addNewOperatorInList = (newOperator: {
    id_operator: number;
    name_operator: string;
  }) => {
    setOperatorsForMobileApp([...OperatorsForMobileApp, newOperator]);
  };

  return (
    <>
      <FormMobilePayment>
        <Title>Выберите оператора</Title>
        <ul>
          {OperatorsForMobileApp.map((item) => (
            <li key={item.id_operator}>
              <Link href={`./operators/${item.name_operator}`}>
                <LinkOperator>{item.name_operator}</LinkOperator>
              </Link>
            </li>
          ))}
        </ul>
      </FormMobilePayment>
      <AddOperatorPanel addNewOperatorInList={addNewOperatorInList} />
    </>
  );
};

export default Index;
