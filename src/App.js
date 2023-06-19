import './index.css';
import Navbar from './components/Nav-bar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Projectlogic from './components/Projectlogic';
import Testimonial from './components/Testimonial';
import Forms from './components/Forms';
import Footer from './components/Footer';


function App() {

  return (
   <div className='wrapper'>
    {/* <Navbar /> */}
    <Header />
    <About />
    <Services />
    <Projectlogic />
    <Forms />
    <Footer />
   </div>
  );
}

export default App;
