import React, { ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { css, cx, keyframes } from '@emotion/css'

interface Props {
  children: ReactElement
}

export const Layout: React.VFC<Props> = (props) => {
  const { children } = props
  const iconSize = 28
  const naves = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/' },
  ]

  // TODO wantedly icon
  const linkIcons = [
    <Link href="https://github.com/koko2824">
      <a target="break">
        <Image src={'/images/github.svg'} height={iconSize} width={iconSize} />
      </a>
    </Link>,
    <Link href="https://www.wantedly.com/id/kokokiki">
      <a target="break">
        <Image src={'/images/wantedly.png'} height={iconSize} width={iconSize} />
      </a>
    </Link>,
  ]

  const fadeIn = keyframes`from { opacity: 0 }; to { opacity: 1 };`

  return (
    <div className={cx('text-black')}>
      <div className="w-8/10 absolute top-0 left-0 right-0 mx-auto">
        <nav className="h-20 flex items-center justify-between">
          <div className="text-xl font-bold w-4 h-full flex items-center">
            <Link href="/">KOKI</Link>
          </div>
          <div className="flex">
            {naves.map((item, i) => (
              <p className="py-4 px-8 text-lg hover:opacity-50" key={i}>
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
      <div
        className={cx(
          'w-8/10 mx-auto',
          css`
            animation: ${fadeIn} 2s ease;
          `
        )}
      >
        {children}
      </div>
    </div>
  )
}
