import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residences from "./components/Residences/Residences";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      {/* <Residences /> */}
    </div>
  );
}

export default App;
