import { NavBar } from '../Navbar/NavBar.component'
import { Footer } from '../Footer/Footer.component'
import SorryPage from '../../pages/sorry/SorryPage';
import { useEffect, useState } from 'react';
import _ from 'lodash'

export default function Layout({ children }: any) {

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
      <>
        <SorryPage></SorryPage>
      </>
    )
  } else {
    return (
      <>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}