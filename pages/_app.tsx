import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  console.log("Z2l0aHViLmNvbS9KYW1UaGVEZXYvcHNzLXNlY3JldC1maWxlcw==");
  console.log("TWFkZSBieTogSmFtIEVtbWFudWVsIFZpbGxhcm9zYSwgSS1BQ1NBRCwgQ0NJUw==")
  return <Component {...pageProps} />
}
