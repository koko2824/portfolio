import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import { css, cx } from '@emotion/css'
import { ArrowLeft, ArrowRight, Home, User, Code, ViewGrid, MailOutline } from 'heroicons-react'

interface sidebarProps {
  children?: ReactElement
}

export default function Sidebar(props: sidebarProps) {
  const [show, setShow] = useState(true)
  if (show) {
    return (
      <div className="flex text-white">
        <div
          className={cx(
            css`
              width: 70px;
            `,
            'h-screen sticky top-0 flex justify-center shadow-4xl'
          )}
        >
          <div>
            <a>
              <ArrowLeft className="my-8" onClick={() => setShow(false)} size={32} />
            </a>
            <Link href="/">
              <a>
                <Home className="mt-16" size={32} />
              </a>
            </Link>
            <User className="mt-8" size={32} />
            <Code className="mt-8" size={32} />
            <ViewGrid className="mt-8" size={32} />
            <MailOutline className="mt-8" size={32} />
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    )
  } else {
    return (
      <div
        className={cx(css``, 'bg-normal-black text-white')}
        onClick={() => setShow(true)}
      >
          <a>
            <ArrowRight className="absolute top-8 left-8" size={32} />
          </a>
          { props.children }
      </div>
    )
  }
}
