import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Location from "./components/Location/Location";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Appointment />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
