import Navbar from './components/layout/Navbar';

import './app.scss';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';
import Journey from './components/Journey';
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Plans />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
