import React, { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Index() {
  const imageSize = 400
  return (
    <Layout>
      <div className="h-screen flex items-center justify-center">
        <div className="w-2/3 ml-auto">
          <div className="w-6/10">
            <div className="w-9/10">
              <h2 className="font-bold text-5xl mb-4">Koki Oshima</h2>
              <h2 className="font-bold text-5xl text-right">Portfolio Site</h2>
            </div>
            <p className="py-4 text-gray text-lg">
              I 'm a Freelance Web Designer & Developer based in Madrid, Spain. I have serious
              passion for UI effects, animations and creating intuitive, with over a decade of
              experience.
            </p>
          </div>
        </div>
        <div className="mr-auto">
          <Image src="/images/top.svg" height={imageSize} width={imageSize} />
        </div>
      </div>
    </Layout>
  )
}
