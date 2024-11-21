import Carousel from '../../components/scenes/carouel/carousel';
import ContactUs from '../../components/scenes/contactUs';
import Footer from '../../components/scenes/footer';
import Navbar1 from '../../components/scenes/navbar';
import Offre1 from '../../components/scenes/ourClasses';

const Accueil = () => {
  return (
    <>
      <Navbar1 />
      <Carousel />
      <Offre1/>
      <ContactUs /> 
      <Footer />
    </>
  );
};
export default Accueil;
