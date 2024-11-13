
import { Link } from 'react-router-dom';

// Capitalize the component name
function HeaderC() {
  return (
    <div>
      <nav className="menu">
        <div className="menu-title">Ma page</div>
        <div className="menu-buttons">
          <button className="menu-button">
            <Link to="/Profil">Profil</Link>
          </button>
        </div>
      </nav>

      <footer className="footer">
        <p>&copy; 2024 @recrutement afreetech.</p>
      </footer>
    </div>
  );
}

export default HeaderC;
