import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Section from './components/Section';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Watch from './components/Watch';
import Header from './components/Header';
import Slider from './components/Slider';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
       <Section />
       <Watch />
       <Slider />
       <Blog />
      <Footer /> 
    </div>
  );
}

export default App;
