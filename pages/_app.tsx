import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "styles/globals.css";
//import Navbar from "src/nav/Navbar";
const Navbar = dynamic(() => import("src/nav/Navbar"), { ssr: false });
import { AuthProvider } from "api/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div data-theme="immlangTheme">
        <Navbar />
        <div className="max-w-7xl my-10 mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default MyApp;
