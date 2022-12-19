import { NavBar } from '../Navbar/NavBar.component'
import { Footer } from '../Footer/Footer.component'

export default function Layout({ children }: any) {
    return (
      <>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </>
    )
}