
import Hero from './components/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/header'
import { LanguageProvider } from './components/LanguageContext'

const App = () => {
  return (
    <div>
      <LanguageProvider>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </LanguageProvider>
    </div>
  )
}

export default App


