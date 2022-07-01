import { settingsMobilePayData } from "./interfaces/interfaces";
import FormMobilePayment from "./styles/components/form/FormMobilePayment";
import Title from "./styles/components/title/Title";
import Link from "next/link";
import LinkOperator from "./styles/components/link/LinkOperator";

const index: React.FC = () => {
  const operators: Array<settingsMobilePayData> = [
    { id_operator: 1, name_operator: "Билайн" },
    { id_operator: 2, name_operator: "МТС" },
    { id_operator: 3, name_operator: "Мегафон" },
  ];

  return (
    <FormMobilePayment>
      <Title>Выберите оператора</Title>
      <ul>
        {operators.map((item) => (
          <li key={item.id_operator}>
            <Link href={`./operators/${item.name_operator}`}>
              <LinkOperator>{item.name_operator}</LinkOperator>
            </Link>
          </li>
        ))}
      </ul>
    </FormMobilePayment>
  );
};

export default index;
