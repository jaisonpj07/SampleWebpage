import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SectionThree from "./components/SectionThree"
import SectionTwo from "./components/SectionTwo"

function App() {
  return (
    <>
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* section two */}
      <SectionTwo />

      {/* section three */}
      <SectionThree />
    </>
  )
}

export default App
