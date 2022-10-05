import Home from './components/Pages/Home';
import Projects from './components/Projects/Projects';
import Experience from './components/Pages/Experience';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Paccfish from './components/Projects/Paccfish';
import Failedsoccer from './components/Projects/Failedsoccer';
import Dashboard from './components/Dashboard/Dashboard';
import Cars from './components/Projects/Cars';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} >
            <Route path="paccfish" element={<Paccfish />} />
            <Route path="failedsoccer" element={<Failedsoccer />} />
            <Route path="cars" element={<Cars />} />

          </Route>
          <Route path="experience" element={<Experience />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
