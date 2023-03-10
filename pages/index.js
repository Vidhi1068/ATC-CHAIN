import Head from "next/head";
import News from "./News";
import Home from "./Home";
import Layout from "../components/Ui/Layout/Layout";
import About from "./About";
import Industries from "./Industries";
import Product from "./Product";
import Video from "./Video";
// import { ContextProvider } from "./api/auth/Contexts/ContextProvider";

export default function index() {
  return (
    <>
      <Head>
        <title>ATC Chain</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      <Product />
      <Industries />
      <Video />
      <About />
      <News />
    </>
  );
}
