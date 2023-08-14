import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ProjectList from './components/ProjectList';
import Testimonial from './components/Testimonial';
import Forms from './components/Forms';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
   <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element= {<About />} />
        <Route path="project" element= {<ProjectList />} />
        <Route path='services' element = {<Services />} />
        <Route path ='testimonial' element = { <Testimonial />} />
        <Route path='contact' element = { <Forms />} />
      </Routes>

    <Footer />
   </BrowserRouter>
  );
}

export default App;
