import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl max-w-2xl mx-auto md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline text-primary-500 inline-flex">
        Back to home
      </Link>
      .
    </h2>
  )
}

export default Header
