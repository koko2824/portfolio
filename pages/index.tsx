import React, { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'

export const Index: NextPage = () => {
  const imageSize = 500
  const myImage = <Image src="/images/index/main.png" height={imageSize} width={imageSize} />
  return (
    <Layout>
      <div className="h-screen flex items-center">
        <div className="w-1/2">
          <div className="w-8/10">
            <h2 className="font-bold text-5xl mb-4">Koki Oshima</h2>
            <h2 className="font-bold text-5xl text-right">Portfolio Site</h2>
          </div>
          <p className="text-gray text-lg pt-8">
            神奈川県にいるプログラミングが好きな普通の高校生です。
            <br />
            課題が出たのでポートフォリオサイトを作ってみました。
          </p>
        </div>
        <div className="ml-auto">{myImage}</div>
      </div>
    </Layout>
  )
}
