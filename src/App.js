import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Home';
import About from './About'
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechAffair from './TechAffair';
import RecentWork from './RecentWork';
import WebApp from './WebApp';
import GraphicDesigning from './GraphicDesigning';
import DigitalMarket from './DigitalMarket';
import SeoandLink from './SeoandLink';
import DigitalSkills from './DigitalSkills';
import Contact from './Contact';
import Career from './Career';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/TechAffair' element={<TechAffair />} />
          <Route exact path='/RecentWork' element={<RecentWork />} />
          <Route exact path='/WebApp' element={<WebApp />} />
          <Route exact path='/GraphicDesigning' element={<GraphicDesigning />} />
          <Route exact path='/DigitalMarket' element={<DigitalMarket />} />
          <Route exact path='/SeoandLink' element={<SeoandLink />} />
          <Route exact path='/DigitalSkills' element={<DigitalSkills />} />
          <Route exact path='/Career' element={<Career />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
