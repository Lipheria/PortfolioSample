import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualifications from './components/Qualification/Qualifications';
import Services from './components/Services/Services';
import Portfolios from './components/Portfolios/Portfolios';
import Project from './components/ProjectInMind/Project';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/ContactMe/Contact';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Services />
      <Portfolios />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollTop/>
    </div>
  );
}

export default App;
