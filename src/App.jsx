import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ScrollToTop from './Components/ScrollToTop'
import FloatingButtons from './Components/FloatingButtons'
import AboutPage from "./Pages/AboutPage"
import ServiceDetail from "./Pages/ServiceDetail"
import Showcase from "./Pages/Showcase"
function App() {

  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
      <Route path='/showcase' element={<Showcase/>} />
    </Routes>
    <Footer />
    <FloatingButtons />
    </>
  )
}

export default App
