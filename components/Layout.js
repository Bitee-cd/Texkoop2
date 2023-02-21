import Head from "next/head";
import Footer from "./Footer";
import dynamic from "next/dynamic";
import { useAppContext } from "./AppContext";

const NavBar = dynamic(
  () => {
    return import("./NavBar");
  },
  { ssr: false }
);

const Layout = ({ modal, children, title, bgNav, textNav, bgHamburger }) => {
  const { navOpen } = useAppContext();
  return (
    <>
      <Head>
        <title>{title ? title + " - Texkoop" : "Texkoop"}</title>
        <meta name="description" content="Texkoop Logistics Company" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <NavBar
        bgNav={bgNav}
        textNav={textNav}
        bgHamburger={bgHamburger}
        modal={modal}
      />
      <main className={`${navOpen && "blur"} min-h-screen font-Helvetica`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
