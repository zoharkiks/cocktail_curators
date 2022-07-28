import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createContext } from "react";
import { Header, Navbar } from "../components/";
import Layout from "../components/Layout";
import { images } from "../constants";

const Home: NextPage = () => {
  return (
    <Layout>
    <div className="">
      <Head>
        <title>Cocktail Curators</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section with list of cocktails */}
      <Header />
    </div>
    </Layout>
  );
};

export default Home;
