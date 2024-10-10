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
        <h2>ANTHONY MILIAN</h2>
        <p>
          Hi, I’m Anthony! <br />
          I am a professional dancer based in Portland, Oregon, born in Ypsilanti, Michigan. I am
          a professional contemporary &amp; ballet dancer working full-time with Northwest Dance
          Project {' '}

          <a href="#">
          (hyperlink NW Dance project website)
          </a>

          , a world-renowned contemporary dance
          company. I am an accredited NCCA National Academy of Sports Medicine (NASM)
          Certified Personal Training, while working towards my NASM Certified Nutrition Coach
          accreditation as well.
        </p>
        <p>
          I earned my master’s degree from the University of Michigan in Movement Science,
          specializing in Exercise Physiology and Biomechanics. I completed my undergraduate
          studies at The Ohio State University, graduating magna cum laude with honors
          research distinction in Dance, alongside a minor in Integrative Approaches to Health
          and Wellness.
        </p>
        <p>
          My style of personal training is rooted in functional fitness. By blending my real-time
          experience as a professional contemporary dancer with my academic background in
          kinesiology, I craft tailored workout programs that optimize performance and promote
          overall well-being. This unique combination is what sets my training apart, ensuring that
          each individual receives a program designed to meet their specific goals and needs.
        </p>
      </div>
    </div>
  );
};

export default About;
