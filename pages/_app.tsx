import React from 'react'
import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <title>Koki's Portfolio</title>
      </Head>
      <div className="w-screen bg-white">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
