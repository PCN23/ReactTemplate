// import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
// import Experience from './pages/Experience';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Navbar /> */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
