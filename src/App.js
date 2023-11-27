import './App.css';
import { Navbar, Gallery, About } from './Container';

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <About />
    <Gallery />
    </div>
  );
}

export default App;
