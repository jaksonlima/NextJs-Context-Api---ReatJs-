import Head from "next/head";

import Counter from "../src/components/Counter";
import MirrorCounter from "../src/components/MirrorCounter";

import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter />
      <MirrorCounter />
    </div>
  );
}

Home.getInitialProps = async () => {
  console.log("getInitialProps");
  return {
    props: "lima",
  };
};

export default Home;
