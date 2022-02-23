import Head from 'next/head'
import Homepage from './homepage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <meta
          name="description"
          content="Pokédex | Search your favourite Pokémon using this webapp"
        />
        <link rel="icon" href="/pokeball3.ico" />
        <link
          href="/fonts/Bangers-Regular.ttf"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>

      <Homepage></Homepage>
    </div>
  )
}
