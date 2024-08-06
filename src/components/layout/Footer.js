import '../../assets/styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
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
      <p>
        &copy; 2024 Anthony Milian Fitness. All rights reserved. Built by{' '}
        <a
          href="https://www.switchcasestudio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'<SC />'}
        </a>{' '}
      </p>
    </footer>
  );
};

export default Footer;
