import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import th2 from '../../../asset/images/user/th2.png';
import th3 from '../../../asset/images/user/th3.png';
import Class from "./Class";

const classes = [
  {
    name: "Gestion de Projet",
    description:
      "La gestion de projet consiste à planifier, organiser et superviser les ressources et les tâches nécessaires pour atteindre les objectifs définis. Elle implique la coordination des équipes et le respect des délais et budgets pour garantir le succès de chaque projet.",
    image: th2,
  },
  {
    name: "Développement Web",
    description:
      "Le développement web inclut la création et l'optimisation de sites web et d'applications mobiles. Les compétences en développement permettent de concevoir des interfaces utilisateur attractives, des systèmes backend performants et d'assurer une expérience fluide pour les utilisateurs.",
    image: th3,
  },
  {
    name: "Marketing Digital",
    description:
      "Le marketing digital englobe l'utilisation des canaux numériques pour promouvoir des produits ou services. Cela inclut la gestion des campagnes sur les réseaux sociaux, le référencement (SEO), les publicités en ligne et l'email marketing pour atteindre une audience ciblée.",
    image: th2,
  },
  {
    name: "Ressources Humaines",
    description:
      "Les ressources humaines se concentrent sur l'acquisition, la gestion et le développement des talents. Cela inclut la gestion des recrutements, la formation des employés, ainsi que la mise en place de stratégies pour améliorer le bien-être et la performance des collaborateurs.",
    image: th3,
  },
  {
    name: "Comptabilité et Finance",
    description:
      "La comptabilité et la finance gèrent les aspects financiers de l'entreprise. Cela comprend la gestion des comptes, la préparation des états financiers, l'analyse des performances économiques et la conformité aux réglementations fiscales pour assurer la stabilité financière de l'entreprise.",
    image: th2,
  },
  {
    name: "Service Client",
    description:
      "Le service client veille à répondre aux besoins et préoccupations des clients de manière efficace et courtoise. Cela inclut la gestion des demandes, la résolution des problèmes et l'amélioration continue de l'expérience client pour renforcer la fidélité et la satisfaction des utilisateurs.",
    image: th3,
  },
];

const Offre1 = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h1 className="fs-30 text-primary-500 my-5" style={{ fontSize: '3rem', color :'green'}}>
              Nos Offres Emplois
            </h1>
            {/* <p className="py-5" style={{ fontSize: '1.5rem'}}>
              Postuler à l'une de nos offres d'emploi, c'est l'occasion de rejoindre une équipe dynamique et de contribuer à la croissance de notre entreprise.
            </p> */}
          </div>
        </motion.div>

        {/* Classement des offres */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Bouton pour postuler */}
      <div className="mt-10 text-center">
        <Link to="/web/postuler">
          <button
            className="rounded-lg bg-green-500 px-6 py-3 text-white font-semibold hover:bg-green-600"
          >
            Postuler à une Offre
          </button>
        </Link>
      </div>
    </section>
  );
};
export default Offre1;
