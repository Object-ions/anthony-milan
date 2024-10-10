import '../assets/styles/journey.scss';

const Journey = () => {
  return (
    <div id="journey">
      <div className="container">
        <h2 className="section-title">What to Expect on Your Fitness Journey</h2>
        
        <div className="section">
          <h3 className="sub-section-title">During Your First Session:</h3>
          
          <div className="content-block">
            <h4 className="content-title">Initial Assessment and Goal Setting</h4>
            <ul className="list">
              <li className="list-item">
                <strong>Comprehensive Fitness Assessment:</strong> We’ll begin with a detailed evaluation of your current fitness level, medical history, and personal goals. This foundational step ensures a tailored approach to your training.
              </li>
              <li className="list-item">
                <strong>Setting SMART Goals:</strong> Together, we’ll establish Specific, Measurable, Achievable, Realistic, and Timely goals to guide your journey.
              </li>
            </ul>
          </div>

          <div className="content-block">
            <h4 className="content-title">Getting Acquainted</h4>
            <p>This session is not just about workouts; it’s an opportunity for us to connect. You’ll have a chance to ask questions and discuss any concerns, ensuring you feel comfortable and confident as we move forward.</p>
          </div>
        </div>

        <div className="section">
          <h3 className="sub-section-title">Throughout Your Workout Journey:</h3>
          
          <div className="content-block">
            <h4 className="content-title">Progress Tracking and Personalized Adjustments</h4>
            <p>I’ll be with you every step of the way, regularly assessing your progress and adapting your training program to keep you challenged and excited. Your journey is unique, and I’m here to make sure it reflects that.</p>
          </div>

          <div className="content-block">
            <h4 className="content-title">Support, Accountability, and Community</h4>
            <p>Think of me as your cheerleader and accountability partner! I’m here to motivate you, celebrate your wins, and help you through any challenges. Plus, you’ll have the chance to connect with others in our supportive community through group classes and events, sharing your experiences and building friendships.</p>
          </div>

          <div className="content-block">
            <h4 className="content-title">Long-Term Lifestyle Changes and Growth</h4>
            <p>Together, we’ll focus on creating sustainable fitness habits that lead to lasting change. I’ll celebrate every milestone with you, big or small, and as you progress, we’ll set new goals and explore opportunities for continued learning, ensuring you stay inspired and engaged in your journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
