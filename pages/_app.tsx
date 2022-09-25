import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/SharedLayout/Layout'
import { Fragment, useEffect, useState } from 'react'
import SorryPage from './sorry/SorryPage'
import _ from 'lodash'

function MyApp({ Component, pageProps }: AppProps) {

  const [isAppDisabled, setResisedToMobileState] = useState<boolean>(false)
  const disableAppFromWidth = 1200;

  useEffect(() => {
    setResisedToMobileState(window.innerWidth < disableAppFromWidth ? true : false)
    window.addEventListener('resize', _.throttle(handleResize, 1000) );
  }, [isAppDisabled, disableAppFromWidth])


  function handleResize() {
    if(window.innerWidth < disableAppFromWidth) {
      setResisedToMobileState(true);
    } else {
      setResisedToMobileState(false)
    } 
  }

  if(isAppDisabled) {
    return(
      <Fragment>
        <SorryPage></SorryPage>
      </Fragment>
    )
  } else {
    return (
      <div className={"page-container"}>
      <div id={"main-content-wraper"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
      </div>

      
    )
}
}

export default MyApp
