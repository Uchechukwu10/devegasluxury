import About from "./components/About/About";
import CoreValues from "./components/CoreValues/CoreValues";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residences from "./components/Residences/Residences";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <Footer />
      {/* <Residences /> */}
    </div>
  );
}

export default App;
