import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Koki's Portfolio </title>
      </Head>
      <div className="bg-bg w-screen h-screen">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
