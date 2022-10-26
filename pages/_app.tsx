import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/SharedLayout/Layout'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {

return (
  <Provider store={store}>
    <div className={"page-container"}>
      <div id={"main-content-wraper"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
    </Provider>
  )
}

export default MyApp
