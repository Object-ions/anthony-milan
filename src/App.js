import Navbar from './components/layout/Navbar';

import './app.scss';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Testimonials />
    </main>
  );
}

export default App;
