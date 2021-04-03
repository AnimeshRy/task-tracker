import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  if (location.pathname !== '/about')
    return (
      <footer>
        <p>Copyright &copy; 2021</p>
        <Link to="/about">About</Link>
      </footer>
    );
  else {
    return <></>;
  }
};

export default Footer;
