import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <main className='bg-blue-50 h-screen'>
      {children}
    </main>
  )
}