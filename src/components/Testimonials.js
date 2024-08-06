import '../assets/styles/testimonials.scss';

const Testimonials = () => (
  <div className="testimonials-container">
    <h2 className="section-title">Success Stories</h2>

    <div className="testimonials-grid">
      <div className="testimonial">
        <img src="/path/to/image1.jpg" alt="Client 1" />
        <div className="testimonial-text">
          <p>
            "Anthony's workouts are incredible! I've never felt more welcomed
            and encouraged in a fitness environment. His background in ballet
            brings a unique and graceful touch to every session."
          </p>
          <span>– Sarah J.</span>
        </div>
      </div>

      <div className="testimonial">
        <img src="/path/to/image2.jpg" alt="Client 2" />
        <div className="testimonial-text">
          <p>
            "I love the inclusive atmosphere Anthony creates. No matter who you
            are or where you come from, you feel like you belong. His expertise
            and passion for fitness are truly inspiring."
          </p>
          <span>– David L.</span>
        </div>
      </div>

      <div className="testimonial">
        <img src="/path/to/image3.jpg" alt="Client 3" />
        <div className="testimonial-text">
          <p>
            "The virtual training sessions have been a game-changer for me.
            Anthony's guidance and support make it easy to stay motivated and
            achieve my fitness goals from home."
          </p>
          <span>– Maria S.</span>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
