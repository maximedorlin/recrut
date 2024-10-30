
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div style={{marginBottom:'1px'}}>

      </div>
      <nav className="menu">
        <div className="menu-title">AFREETECH RECRUTEMENT </div>
        <div className="menu-buttons">

          <button className="menu-button">
            <Link to="/Compte">Crée un Compte</Link>
          </button>

          {/* <button className="menu-button">
            <Link to="/Mes_Infos">Suivre ma Candidature</Link>
          </button> */}

          <button className="menu-button">
            <Link to="/login">Admin</Link>
          </button>

        </div>
      </nav>

      <footer className="footer">
        <p>&copy; 2024 @recrutement afreetech.</p>
      </footer>
    </div>
  );
}

export default Header;
