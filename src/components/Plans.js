import '../assets/styles/plans.scss';
import bgVideo from '../assets/videos/bg-video.mov';
import plansContent from '../data/plansContent.json';

const Plans = () => {
  return (
    <div id="plans">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="overlay">
        <h2 className="section-title">Packages and Services</h2>

        {plansContent.packages.map((packageCategory, index) => (
          <div key={index}>
            <h3 className="sub-section-title">{packageCategory.category}</h3>

            <div className="grid">
              {packageCategory.services.map((service, idx) => (
                <div className="package" key={idx}>
                  <h4 className="package-title">{service.title}</h4>
                  <ul className="list">
                    {service.description.map((desc, i) => (
                      <li className="list-item" key={i}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <p className="price">{service.pricing}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
