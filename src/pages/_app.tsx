import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/globals.css";
import Layout from "./components/main/structure/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
  <ChakraProvider  >
  <Layout><Component {...pageProps} /></Layout>

  </ChakraProvider>
  </>;
};

export default MyApp;
