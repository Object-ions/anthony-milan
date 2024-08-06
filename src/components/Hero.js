import heroImage from '../assets/images/hero.jpeg';

import '../assets/styles/hero.scss';
const Hero = () => {
  return (
    <div className="hero" style={{ background: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Inclusive Workouts for Everyone</h1>
        <p>
          No matter your color, size, or background, Anthony Milian welcomes you
          to a journey of fitness and well-being.
        </p>

        <button>Join Me Today!</button>
      </div>
    </div>
  );
};

export default Hero;
