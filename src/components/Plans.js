import '../assets/styles/plans.scss';

const Plans = () => {
  return (
    <div className="plans">
      <h2 className="section-title">Packages and Services</h2>

      <h3 className="sub-section-title">Personal Training Packages</h3>

      <div className="grid">
        <div className="package">
          <h4 className="package-title">One-on-One Personal Training</h4>
          <ul className="list">
            <li className="list-item">
              Personalized workout plans tailored to your goals
            </li>
            <li className="list-item">Nutritional guidance and support</li>
            <li className="list-item">
              Flexible scheduling to fit your lifestyle
            </li>
          </ul>
          <p className="price">$70 per session | $650 for 10 sessions</p>
        </div>

        <div className="package">
          <h4 className="package-title">Group Training Sessions</h4>
          <ul className="list">
            <li className="list-item">Fun and engaging group workouts</li>
            <li className="list-item">
              Perfect for friends or family who want to train together
            </li>
            <li className="list-item">
              Inclusive atmosphere welcoming everyone
            </li>
          </ul>
          <p className="price">
            $30 per person per session | $270 per person for 10 sessions
          </p>
        </div>

        <div className="package">
          <h4 className="package-title">Virtual Training</h4>
          <ul className="list">
            <li className="list-item">Train from the comfort of your home</li>
            <li className="list-item">
              Live virtual sessions with real-time feedback
            </li>
            <li className="list-item">
              Customized workout plans and progress tracking
            </li>
          </ul>
          <p className="price">$50 per session | $450 for 10 sessions</p>
        </div>
      </div>

      <h3 className="sub-section-title">Specialized Programs</h3>

      <div className="grid two-cols">
        <div className="package">
          <h4 className="package-title">Ballet-Inspired Workouts</h4>
          <ul className="list">
            <li className="list-item">
              Enhance flexibility, strength, and grace
            </li>
            <li className="list-item">Perfect for all fitness levels</li>
          </ul>
          <p className="price">$80 per session | $720 for 10 sessions</p>
        </div>

        <div className="package">
          <h4 className="package-title">Inclusive Fitness Classes</h4>
          <ul className="list">
            <li className="list-item">
              Designed to accommodate all abilities and backgrounds
            </li>
            <li className="list-item">
              Focus on building confidence and community
            </li>
          </ul>
          <p className="price">$25 per class | $200 for 10 classes</p>
        </div>
      </div>
    </div>
  );
};

export default Plans;
