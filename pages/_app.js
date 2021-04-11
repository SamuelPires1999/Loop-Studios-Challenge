import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Loop Studios</title>
        <link rel="icon" type="image/png" href="favicon-32x32.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet"/> 
        <meta
          name="description"
          content="Page Created as part of Front end mentor challenge."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
