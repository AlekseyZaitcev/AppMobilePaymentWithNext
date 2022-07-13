import Global from "../src/styles/global/Global";
import { ContainerApp } from "../src/styles/global//ContainerApp";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global></Global>
      <ContainerApp>
        <Component {...pageProps}></Component>
      </ContainerApp>
    </>
  );
}
