import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Lander from './components/Lander';
import Gallery from './components/Gallery';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path='/' Component={() => (< Lander/>)}/>
            <Route exact path='/product' Component={() => (< Products/>)}/>
            <Route exact path='/about' Component={() => (< About/>)}/>
            <Route exact path='/gallery' Component={() => (< Gallery/>)}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
