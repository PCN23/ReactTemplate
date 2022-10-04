import Home from './pages/Home';
import Projects from './pages/Projects';
// import Experience from './pages/Experience';
// import Navbar from './components/Navbar';
import Footer from './Footer/Footer';
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
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
