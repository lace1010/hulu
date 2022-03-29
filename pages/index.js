import Head from "next/head";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Results from "../components/Results.jsx";
import requests from "../utils/requests.js";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Hulu Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    } `
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
