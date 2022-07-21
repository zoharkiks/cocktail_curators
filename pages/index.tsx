import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Header, Navbar} from '../components/'
import {images} from '../constants'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-no-repeat bg-contain bg-center bg-[url('../assets/bg.png')]">
      <Head>
        <title>Cocktail Curators</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Navbar/>
{/* Header Section with list of cocktails */}
      <Header/>
    </div>
  )
}

export default Home
