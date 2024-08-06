import '../../assets/styles/navbar.scss';
const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#plans">Plans & Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul>
          <li>Instagram</li>
          <li>@anthony_milian</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
