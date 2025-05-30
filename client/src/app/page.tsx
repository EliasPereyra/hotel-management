import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen p-4 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-4xl">Save your next room</h1>
      <p className="text-center text-lg">Easily book your next stay with just a few clicks</p>
      <Link href="/rooms" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
        Book your room
      </Link>
    </main>
  )
}
