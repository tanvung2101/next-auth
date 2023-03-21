import "@/styles/globals.css";
import "../components/Navbar.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      {/* <SessionProvider session={session}>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </SessionProvider> */}
      <SessionProvider session={session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <>
            <Navbar></Navbar>
            <Component {...pageProps} />
          </>
        )}
      </SessionProvider>
    </>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}
