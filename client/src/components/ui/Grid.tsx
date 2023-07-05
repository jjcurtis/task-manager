import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Grid({ children }: Props) {
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {children}
    </main>
  )
}