import { AppContext } from "../components/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  );
}

export default MyApp;
