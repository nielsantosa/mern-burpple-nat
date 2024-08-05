import Navbar from './navbar'
import Footer from './footer'
 
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;