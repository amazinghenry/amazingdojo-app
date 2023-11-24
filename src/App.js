import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import About from './components/about/About';
import Services from './components/services/Services';
import ProjectList from './components/project/ProjectList';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Store from './components/store/Store';


const App = () => {

  return (
   <BrowserRouter>
    <Navbar />
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="about" element= {<About />} />
        <Route path="project" element= {<ProjectList />} />
        <Route path='services' element = {<Services />} />
        <Route path ='testimonial' element = { <Testimonial />} />
        <Route path='contact' element = { <Contact />} />
        <Route path='store' element = { <Store />} />
      </Routes>

    <Footer />
   </BrowserRouter>
  );
}

export default App;
