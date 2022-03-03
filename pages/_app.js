import "../styles/styles.css";
import "../styles/styles.scss";
import "../styles/nav.css";
import "../styles/nav.scss";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
