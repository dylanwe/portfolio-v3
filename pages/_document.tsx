import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-neutral-50 dark:bg-neutral-900 overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
