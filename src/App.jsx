import Header from "./components/Header"
import './index.css'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./components/Button"
import Hero from "./components/Hero"
import ParticlesComponent from "./components/ParticlesComponent"
import About from "./components/About"


const App = () => {
  return (
    <>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

        <Header />
        <Hero />
        {/* <About /> */}
      </div>
      <ButtonGradient />

    </>
  )
}

export default App
