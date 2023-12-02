import "./App.css";
import { Navbar, Vår, Sommar, About, Vinter } from "./Container";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Vinter />
      <Vår />
      <Sommar />
    </div>
  );
}

export default App;
