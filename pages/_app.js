import { AppContext, useAppContext } from "../components/AppContext";
import "../styles/globals.css";
import { useRouter, Router } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PreLoader from "../components/PreLoader";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState(router.route);
  const [previousRoute, setPreviousRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleRouteChange = (url) => {
      setPreviousRoute(currentRoute);
      setCurrentRoute(router.route);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setTimeout(() => {
      setLoading(false);
    });
  });
  useEffect(() => {
    `Previous route: ${(previousRoute, currentRoute)}`;
  }, [router.route]);
  return (
    <>
      <AppContext>
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
        </div>

        {loading ? (
          <PreLoader />
        ) : (
          <Component {...pageProps} previousRoute={previousRoute} />
        )}
      </AppContext>
    </>
  );
}

export default MyApp;
