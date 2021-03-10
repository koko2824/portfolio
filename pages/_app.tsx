import React from 'react'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-screen bg-normal-black">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
