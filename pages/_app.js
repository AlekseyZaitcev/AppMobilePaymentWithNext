import Global from "../src/styles/global/Global";
import Container from "../src/styles/global/Container";

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
