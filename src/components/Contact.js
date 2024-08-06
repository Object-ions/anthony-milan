import '../assets/styles/contact.scss';
import tonyBlue from '../assets/images/milian-blue.jpg';

const Contact = () => {
  return (
    <div id="contact" style={{ background: `url(${tonyBlue})` }}>
      <div className="background-div">
        <div className="contact-content">
          <div className="contact-first-section">
            <h2>Contact Me</h2>

            <div className="contact-text">
              <p>
                Ready to start your fitness journey with Anthony Milian? <br />
                Contact me today to book your first session or to learn more
                about my training programs.
              </p>
            </div>

            <div className="contact-info">
              <p>Phone: (555) 123-4567</p>
              <p>Email: anthony@inclusivefitness.com</p>
              <p>Location: 123 Fitness Lane, Your City, State, 12345</p>
            </div>
          </div>

          <div className="social-media">
            <h3>Follow Me:</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
