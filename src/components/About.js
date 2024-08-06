import aboutImage from '../assets/images/milian.jpg';
import '../assets/styles/about.scss';

const About = () => {
  return (
    <div id="about">
      <div
        className="about-image-wrapper"
        style={{ background: `url(${aboutImage})` }}
      ></div>

      <div className="about-content">
        <h2>Anthony Milian</h2>
        <p>
          Welcome to my personal training website! I'm Anthony Milian, and I'm
          thrilled to help you on your fitness journey. With a rich background
          as a professional ballet dancer, I've dedicated my life to movement,
          strength, and flexibility. My mission is to provide inclusive workouts
          where everyone feels welcome and supported, regardless of color, size,
          or background.
        </p>
        <p>
          Fitness is for everyone, and I believe in creating a positive and
          encouraging environment where you can achieve your goals and feel
          confident in your own skin. Join me, and let's embark on this journey
          together!
        </p>
      </div>
    </div>
  );
};

export default About;
