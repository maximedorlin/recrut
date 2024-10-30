import Offre from './offre';

import './Accueil.css';
import Header from './header';
import './offre.css';

const Accueil = () => {
  return (
    <>
    <Header/>
    <div className='corps'>
    <Offre />
    </div>

    </>
  );
};
export default Accueil;
