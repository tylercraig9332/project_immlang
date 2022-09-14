import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "styles/globals.css";
const Navbar = dynamic(() => import("src/nav/Navbar"), { ssr: false });
import { AuthProvider } from "src/auth/components/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div data-theme="immlangTheme">
        <Navbar />
        <div className="max-w-7xl my-20 mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default MyApp;
