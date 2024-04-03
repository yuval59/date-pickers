'use client'

import { PAGES } from '@/constants'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className='flex min-h-screen flex-col items-center justify-around p-24'>
      {PAGES.map(({ location, name }) => (
        <button
          key={location}
          className='px-5 py-3 rounded-full font-semibold bg-sky-500 hover:bg-sky-500/80'
          onClick={() => router.push(location)}
        >
          {name}
        </button>
      ))}
    </main>
  )
}
