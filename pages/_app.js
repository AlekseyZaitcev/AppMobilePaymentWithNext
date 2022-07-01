import Global from "./styles/global/Global";
import Container from "./styles/global/Container";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global></Global>
      <Container>
        <Component {...pageProps}></Component>
      </Container>
    </>
  );
}
