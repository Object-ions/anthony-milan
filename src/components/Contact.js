import '../assets/styles/contact.scss';

const Contact = () => {
  return (
    <div id="contact">
      <div className="background-div">
        <div className="contact-content">
          <div className="contact-first-section">
            <h2>Contact Me</h2>

            <div className="contact-info">
              <p>Phone: (734) 516-6064</p>
              <p>Email: anthonymilianfitness@gmail.com</p>
              <p>Location: Portland, Oregon</p>
            </div>

            <div className="social-media">
              <h3>Follow Me:</h3>
              <a
                href="https://www.instagram.com/anthonytmilian"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="contact-second-section">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
