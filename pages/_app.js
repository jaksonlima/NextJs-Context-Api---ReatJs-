import "../styles/globals.css";

import ContextComponent from "../src/components/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextComponent>
      <Component {...pageProps} />
    </ContextComponent>
  );
}

export default MyApp;
