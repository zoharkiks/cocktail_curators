import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DrinksProvider } from '../drinksContext'
import { Navbar } from '../components'


function MyApp({ Component, pageProps }: AppProps) {
  
  return <DrinksProvider><Navbar/> <Component {...pageProps} /></DrinksProvider>
}

export default MyApp
