import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import ProjectList from './components/ProjectList';
import Testimonial from './components/Testimonial';
import Forms from './components/Forms';
import Footer from './components/Footer';


function App() {

  return (
   <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Services />
      <ProjectList />
      <Testimonial />
      <Forms />
      <Footer />
   </div>
  );
}

export default App;
