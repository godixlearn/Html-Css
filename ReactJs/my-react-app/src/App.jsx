import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Appointment from "./components/Appointment";
import Location from "./components/Location";

function App(){
  return(
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero/>
        <About/>
        <Appointment /> 
        <Location />
      </main>
      <Footer/>
    </>
  )
}

export default App;