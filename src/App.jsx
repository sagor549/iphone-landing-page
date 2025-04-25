import Features from "./componets/Features"
import Footer from "./componets/Footer"
import Hero from "./componets/Hero"
import Highlight from "./componets/Highlight"
import HowItWorks from "./componets/HowItWorks"
import Model from "./componets/Model"
import Navbar from "./componets/Navbar"


const App = () => {
  return (
   <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlight/>
    <Model/>
    <Features/>
    <HowItWorks/>
    <Footer/>
    
   </main>
  )
}
export default App