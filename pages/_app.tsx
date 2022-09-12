
import type { AppProps } from 'next/app'
import 'styles/globals.css'
import Navbar from 'src/nav/Navbar'

function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <div data-theme="immlangTheme">
      <Navbar />
      <div className="max-w-7xl my-10 mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
