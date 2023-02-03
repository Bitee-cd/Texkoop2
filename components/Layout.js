import Head from "next/head";
import Footer from "./Footer";
import dynamic from "next/dynamic";
import { useAppContext } from "./AppContext";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const NavBar = dynamic(
  () => {
    return import("./NavBar");
  },
  { ssr: false }
);

const Layout = ({ children, title, bgNav, textNav, bgHamburger }) => {
  const { navOpen } = useAppContext();
  return (
    <>
      <Head>
        <title>{title ? title + " - Texkoop" : "Texkoop"}</title>
        <meta name="description" content="Texkoop Logistics Company" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div className="hidden lg:block">
        <AnimatedCursor
          color="221, 134, 38"
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={5}
          innerSize={10}
          outerSize={20}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        {/* <Mouse /> */}
      </div>
      <NavBar bgNav={bgNav} textNav={textNav} bgHamburger={bgHamburger} />
      <main className={`${navOpen && "blur"} min-h-screen font-Helvetica`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
