import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Offer />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
