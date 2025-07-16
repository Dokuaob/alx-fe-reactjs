import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#222', padding: '10px' }}>
      <Link to="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px', color: 'white' }}>About</Link>
      <Link to="/services" style={{ marginRight: '15px', color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
