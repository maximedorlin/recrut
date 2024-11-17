import { Link } from 'react-router-dom'; 
import errorImage from '../asset/images/user/error.png'

const P404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img 
        src={errorImage} 
        alt="Error" 
        className="mb-5 w-1/2 md:w-1/4" 
      />
      <h1 className="text-2xl font-bold text-red-600">Oups ! Une erreur est survenue.</h1>
      <p className="mt-3 text-lg">
        Désolé, quelque chose s'est mal passé. Veuillez réessayer plus tard.
      </p>
      <Link to="/" className="mt-5 inline-block bg-primary text-white py-2 px-4 rounded">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default P404;