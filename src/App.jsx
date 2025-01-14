import About from "./components/About/About";
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
      {/* <Residences /> */}
    </div>
  );
}

export default App;
