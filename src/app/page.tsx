import Header from "./components/Header"
//import Footer from "./components/Footer"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/skills"
import Project from "./components/project"
import Contact from "./components/contact"
import Footer from "./components/Footer"
export default function Home(){
  return(
    <div className="w-auto">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      
      
    </div>
  )
}