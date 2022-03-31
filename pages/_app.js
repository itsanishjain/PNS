import { BlockFiProvider } from '../context/context'
import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // this is fine here. for more details, see: https://docs.moralis.io/moralis-server/database/security
      serverUrl="https://zpoco9zecvth.usemoralis.com:2053/server"
      appId="Ln95OTXfWjIYSCFyPd9hXlzJsKUP6H5GnhTBiCHa"
    >
      <BlockFiProvider>
        <Component {...pageProps} />
      </BlockFiProvider>
    </MoralisProvider>
  )
}

export default MyApp
