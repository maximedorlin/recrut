import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar1 from '../../components/scenes/navbar';
import th2 from '../../asset/images/user/th2.png'; // Assurez-vous que ce chemin est correct

const Postuler = () => {
  const formik = useFormik({
    initialValues: {
      nom: '',
      document: '',
      offre: '',
      niveauEtude: '',
      modalite: '',
      date: '',
      email: '',
    },
    validationSchema: Yup.object({
      nom: Yup.string()
        .required('Le nom est requis')
        .min(2, 'Le nom doit contenir au moins 2 caractères')
        .max(50, 'Le nom ne peut pas dépasser 50 caractères')
        .nullable(),

      document: Yup.string()
        .required('Le numéro de document est requis')
        .nullable(),

      offre: Yup.string()
        .required('L\'offre est requise')
        .nullable(),

      modalite: Yup.number()
        .required('La modalité est requise')
        .nullable(),

      date: Yup.date()
        .required('La date est requise')
        .nullable(),

      email: Yup.string()
        .email('Email invalide')
        .required('L\'email est requis')
        .nullable(),
    }),

    onSubmit: (values) => {
      console.log('Form data:', values);
      // Ajoutez ici la logique pour envoyer les données
      alert('Candidature soumise avec succès !');
      formik.resetForm();
    },
  });

  return (
    <>
      <Navbar1 />
      <div
      /*  style={{
         backgroundImage: `url(${th2})`, // Appliquer l'image d'arrière-plan
         backgroundPosition: 'center', // Centrer l'image
         backgroundSize: 'cover', // Couvrir toute la zone
         backgroundRepeat: 'no-repeat', // Ne pas répéter l'image
         height: '100vh', // Hauteur de l'écran entier
       }} */
      >
        <div className="mt-40" style={{ backgroundColor: 'transparent' }}>
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 m-30">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <div className="flex items-center justify-center h-full">
                    <h1 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 text-green-500" style={{ fontSize: '1.4rem' }}>
                      Nouvelle Candidature
                    </h1>
                  </div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="p-6.5">
                    {/* Name and Email Fields */}
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label htmlFor="nom" className="mb-2.5 block text-black dark:text-white">
                          Nom
                        </label>
                        <input
                          id="nom"
                          type="text"
                          placeholder="Entrez le nom"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.nom}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.nom && formik.errors.nom ? 'border-red-500' : ''
                            }`}
                        />
                        {formik.touched.nom && formik.errors.nom && <div className="text-red-500">{formik.errors.nom}</div>}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label htmlFor="email" className="mb-2.5 block text-black dark:text-white">
                          Email
                          <span className="text-meta-1">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Entrez votre adresse email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                            }`}
                        />
                        {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                      </div>
                    </div>

                    {/* Job Offer and Document Fields */}
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label htmlFor="offre" className="mb-2.5 block text-black dark:text-white">
                          Offre d'Emploi
                          <span className="text-meta-1">*</span>
                        </label>
                        <select
                          id="offre"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.offre}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.offre && formik.errors.offre ? 'border-red-500' : ''
                            }`}
                        >
                          <option value="" label="Choisir une Offre" />
                          <option value="Offre_1">Offre 1</option>
                          <option value="Offre_2">Offre 2</option>
                          <option value="Offre_3">Offre 3</option>
                          <option value="Offre_4">Offre 4</option>
                        </select>
                        {formik.touched.offre && formik.errors.offre && <div className="text-red-500">{formik.errors.offre}</div>}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label htmlFor="documents" className="mb-2.5 block text-black dark:text-white">
                          Pièces jointes
                          <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="file"
                          id="documents"
                          name="documents"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.document && formik.errors.document ? 'border-red-500' : ''
                            }`}
                          multiple // Permet à l'utilisateur de télécharger plusieurs fichiers
                        />
                        {formik.touched.document && formik.errors.document && (
                          <div className="text-red-500">{formik.errors.document}</div>
                        )}
                      </div>
                    </div>

                    {/* Date and Study Level Fields */}
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label htmlFor="date" className="mb-2.5 block text-black dark:text-white">
                          Date d'envoi
                        </label>
                        <input
                          id="date"
                          type="datetime-local"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.date}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.date && formik.errors.date ? 'border-red-500' : ''
                            }`}
                        />
                        {formik.touched.date && formik.errors.date && <div className="text-red-500">{formik.errors.date}</div>}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label htmlFor="niveau_etude" className="mb-2.5 block text-black dark:text-white">
                          Niveau d'Étude
                          <span className="text-meta-1">*</span>
                        </label>
                        <select
                          id="niveau_etude"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.niveauEtude}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.niveauEtude && formik.errors.niveauEtude ? 'border-red-500' : ''
                            }`}
                        >
                          <option value="" label="Choisir un niveau d'Etude" />
                          <option value="bac_1">bac + 1</option>
                          <option value="bac_2">bac + 2</option>
                          <option value="bac_3">bac + 3</option>
                          <option value="bac_4">bac + 4</option>
                          <option value="bac_5">bac + 5</option>
                        </select>
                        {formik.touched.niveauEtude && formik.errors.niveauEtude && (
                          <div className="text-red-500">{formik.errors.niveauEtude}</div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="flex ml-auto justify-center text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
                    >
                      Envoyer la Candidature
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Postuler;
