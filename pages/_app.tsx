import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  console.log("| = = = = = = = = = = = = = = = = |")
  console.log()
  console.log("Ba't andito ka?")
  console.log()
  console.log("| = = = = = = = = = = = = = = = = |")
  return <Component {...pageProps} />
}
