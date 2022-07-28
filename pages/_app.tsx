import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DrinksProvider } from '../drinksContext'


function MyApp({ Component, pageProps }: AppProps) {
  
  return <DrinksProvider> <Component {...pageProps} /></DrinksProvider>
}

export default MyApp
