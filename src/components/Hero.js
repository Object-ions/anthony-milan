import heroImage from '../assets/images/IMG_8015.jpg';

import '../assets/styles/hero.scss';
const Hero = () => {
  return (
    <div id="hero" style={{ background: `url(${heroImage})` }}>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>WORKOUTS FOR EVERYONE</h1>
          <p>
            Regardless of where you are in your fitness journey, I will help you feel more
            confident and empowered through my use of functional fitness.
          </p>

          <button>Join Me Today!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
