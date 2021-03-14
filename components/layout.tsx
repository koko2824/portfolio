import React, { ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  children: ReactElement
}

const Layout = (props: Props) => {
  const { children } = props
  const iconSize = 28
  const naves = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '/' },
    { name: 'Skills', href: '/' },
    { name: 'Contact', href: '/' },
  ]

  const linkIcons = [
    <Image src={'/images/github.svg'} height={iconSize} width={iconSize} />,
    <Image src={'/images/github.svg'} height={iconSize} width={iconSize} />,
  ]

  return (
    <div>
      <div className="w-8/10 absolute top-0 left-0 right-0 mx-auto">
        <nav className="h-20 flex items-center justify-between">
          <div className="text-xl font-bold w-4 h-full flex items-center">
            <Link href="/">KOKI</Link>
          </div>
          <div className="flex">
            {naves.map((item, i) => (
              <p className="py-4 px-8 text-lg" key={i}>
                <Link href={item.href}>{item.name}</Link>
              </p>
            ))}
          </div>
          <div className="flex">
            {linkIcons.map((item, i) => (
              <div className="px-2" key={i}>
                {item}
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="w-8/10 mx-auto">{children}</div>
    </div>
  )
}

export default Layout
