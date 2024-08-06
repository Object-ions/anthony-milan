import '../assets/styles/contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-text">
        <p>
          Ready to start your fitness journey with Anthony Milian? Contact me
          today to book your first session or to learn more about my training
          programs.
        </p>
      </div>

      <div className="contact-info">
        <p>Phone: (555) 123-4567</p>
        <p>Email: anthony@inclusivefitness.com</p>
        <p>Location: 123 Fitness Lane, Your City, State, 12345</p>
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
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Contact;
