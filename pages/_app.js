import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
