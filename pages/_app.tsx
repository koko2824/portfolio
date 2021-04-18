import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/index.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <title>Koki&apos;s Portfolio</title>
      </Head>
      <div className="w-screen bg-white">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
