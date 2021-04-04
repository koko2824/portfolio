import React from 'react'
import Image from 'next/image'
import Layout from '../components/layout'

const About = () => {
  const imageSize = 500
  const myImage = <Image src="/images/about/about.png" height={imageSize} width={imageSize} />
  // TODO typography component作る
  return (
    <Layout>
      <div className="h-screen flex ">
        <div className="w-2/3 mt-48 pr-32 ml-auto">
          <h3 className="text-4xl font-bold tracking-wider">About Me</h3>
          <p className="text-gray text-lg py-2">2003年 神奈川県生まれ</p>
          <p className="mt-10 text-gray text-lg">
            中学3年の時にプログラミングと出会い2ヶ月後に挫折。
            <br />
            高校1年の冬に再び本格的に勉強を始め、半年ほどサーバーサイドの勉強をしていました。
          </p>
          <p className="pt-4 text-gray text-lg">
            その後、実際に実務を体験したいと思い、インターンシップに参加。
            <br />
            現在はインターン先である
            <a className="text-primary-main" href="https://3-shake.com" target="break">
              3-shake.com
            </a>
            でフロントエンドエンジニアとして活動中です。
          </p>
          <p className="pt-4 text-gray text-lg">趣味はRPGゲームとサッカー観戦。</p>
        </div>
        <div className="self-center">{myImage}</div>
      </div>
    </Layout>
  )
}

export default About
