import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Card({ children }: Props) {
  return (
    <article className="flex flex-col gap-1 p-4 text-lg border-slate-400 bg-slate-200 border-2 hover:bg-slate-300 hover:border-black">
      {children}
    </article>
  )
}