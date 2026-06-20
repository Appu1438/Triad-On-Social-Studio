import { Routes, Route } from 'react-router-dom'


import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Services from './pages/services/Services.jsx'
import Packages from './pages/packages/Packages.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'
import Contact from './pages/contact/Contact.jsx'
import FAQ from './pages/faq/FAQ.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import ServiceDetail from './pages/serviceDetail/ServiceDetail.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route >
    </Routes>

  )
}