import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import '../components/CSS/home.css'; // Se preferir separar o CSS

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='header_log'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='header_title'>
          <h1>Império Hamburgueria</h1>
          <h2>O melhor do Brasil</h2>
        </div>
        <div className="social-icons">
          <a href="https://instagram.com/suaPagina" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com/suaPagina" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://tiktok.com/@suaPagina" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
      <div className='header_nav'>
        <button className='btn_nav' onClick={() => navigate('/alacarti')}>
          <span><FontAwesomeIcon icon={faUtensils} /></span>
          <span>A la Carte</span>
        </button>
        <button className='btn_nav' onClick={() => navigate('/rodizio')}>
          <span><FontAwesomeIcon icon={faHamburger} /></span>
          <span>Rodízio</span>
        </button>
      </div>
    </div>
  );
}
