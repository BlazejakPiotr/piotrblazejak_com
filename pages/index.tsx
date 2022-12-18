import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
import HomePage from "../src/components/home/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>Front-End Developer Portfolio - Piotr Blazejak</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HomePage />
    </>
  );
}

export async function getServerSideProps() {
  const { projects } = await import("../data/data.json");

  return {
    props: {
      data: projects,
    },
  };
}
