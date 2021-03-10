import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import { css, cx, keyframes } from '@emotion/css'
import { ArrowLeft, ArrowRight, Home, User, Code, ViewGrid, MailOutline } from 'heroicons-react'

interface sidebarProps {
  children?: ReactElement
}

export default function Sidebar(props: sidebarProps) {
  const [show, setShow] = useState(true)
  const links = [
    { icon: <Home className="mt-16" size={32} />, href: '/' },
    { icon: <User className="mt-8" size={32} />, href: '#' },
    { icon: <Code className="mt-8" size={32} />, href: '#' },
    { icon: <ViewGrid className="mt-8" size={32} />, href: '#' },
    { icon: <MailOutline className="mt-8" size={32} />, href: '#' },
  ]
  const slideIn = keyframes`
  from { transform: translateX(-3rem) }
  to { transform: translateX(0)}
  `

  if (show) {
    return (
      <div className="flex text-white w-screen">
        <div
          className={cx(
            ' absolute top-0 left-0 px-5',
            css`
              animation: ${slideIn} .3s;
            `
          )}
        >
          <a>
            <ArrowLeft className="my-8" onClick={() => setShow(false)} size={32} />
          </a>
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              <a> {link.icon} </a>
            </Link>
          ))}
        </div>
        <div className="">{props.children}</div>
      </div>
    )
  } else {
    return (
      <div className="bg-normal-black text-white" onClick={() => setShow(true)}>
        <a>
          <ArrowRight
            className={cx(
              'absolute top-8 left-8',
              css`
                animation: ${slideIn} .3s ease-out;
              `
            )}
            size={32}
          />
        </a>
        {props.children}
      </div>
    )
  }
}
