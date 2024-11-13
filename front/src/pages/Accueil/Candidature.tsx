import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from './header';
import './offre.css';

const Postuler = () => {
  const formik = useFormik({
    initialValues: {
      nom: '',
      telephone: '',
      nationalite: '',
      niveauEtude: '',
      modalite: '',
      situation: '',
      date: '',
      email: '',
    },
    validationSchema: Yup.object({
      nom: Yup.string()
        .required('Le nom est requis')
        .min(2, 'Le nom doit contenir au moins 2 caractères')
        .max(50, 'Le nom ne peut pas dépasser 50 caractères')
        .nullable(),
      
      telephone: Yup.string()
        .required('Le numéro de téléphone est requis')
        .min(9, 'Le numéro de téléphone doit contenir au moins 10 caractères')
        .max(15, 'Le numéro de téléphone ne peut pas dépasser 15 caractères')
        .nullable(),
      
      nationalite: Yup.string()
        .required('La nationalité est requise')
        .nullable(),

      niveauEtude: Yup.string()
        .required('Le niveau d\'étude est requis')
        .nullable(),

      modalite: Yup.number()
        .required('La modalité est requise')
        .nullable(),
      
      situation: Yup.string()
        .required('La situation du candidat est requise')
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
      <Header />
      <div className='corps'>
        <div style={{ width: '80%' }}>
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 m-30">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Nouvelle Candidature
                  </h3>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="p-6.5">
                    {/* Name and Phone Number Fields */}
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
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.nom && formik.errors.nom ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.nom && formik.errors.nom && <div className="text-red-500">{formik.errors.nom}</div>}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label htmlFor="telephone" className="mb-2.5 block text-black dark:text-white">
                          Numéro de téléphone
                        </label>
                        <input
                          id="telephone"
                          type="text"
                          placeholder="Entrez votre numéro de téléphone"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.telephone}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.telephone && formik.errors.telephone ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.telephone && formik.errors.telephone && <div className="text-red-500">{formik.errors.telephone}</div>}
                      </div>
                    </div>

                    {/* Nationality and Education Level Fields */}
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label htmlFor="nationalite" className="mb-2.5 block text-black dark:text-white">
                          Nationalité
                        </label>
                        <input
                          id="nationalite"
                          type="text"
                          placeholder="Entrez le nom du pays"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.nationalite}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.nationalite && formik.errors.nationalite ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.nationalite && formik.errors.nationalite && <div className="text-red-500">{formik.errors.nationalite}</div>}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label htmlFor="niveau-etude" className="mb-2.5 block text-black dark:text-white">
                          Niveau d'Étude
                        </label>
                        <input
                          id="niveau-etude"
                          type="text"
                          placeholder="Entrez votre niveau d'étude"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.niveauEtude}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.niveauEtude && formik.errors.niveauEtude ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.niveauEtude && formik.errors.niveauEtude && <div className="text-red-500">{formik.errors.niveauEtude}</div>}
                      </div>
                    </div>

                    {/* Modality and Candidate Situation Fields */}
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label htmlFor="modalite" className="mb-2.5 block text-black dark:text-white">
                          Modalité
                        </label>
                        <input
                          id="modalite"
                          type="number"
                          placeholder="Modalité"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.modalite}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.modalite && formik.errors.modalite ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.modalite && formik.errors.modalite && <div className="text-red-500">{formik.errors.modalite}</div>}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label htmlFor="situation" className="mb-2.5 block text-black dark:text-white">
                          Situation du Candidat
                        </label>
                        <select
                          id="situation"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.situation}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.situation && formik.errors.situation ? 'border-red-500' : ''}`}
                        >
                          <option value="" label="Choisir une option" />
                          <option value="Marié">Marié</option>
                          <option value="Célibataire">Célibataire</option>
                          <option value="Divorcé">Divorcé</option>
                          <option value="EnCouple">En Couple</option>
                        </select>
                        {formik.touched.situation && formik.errors.situation && <div className="text-red-500">{formik.errors.situation}</div>}
                      </div>
                    </div>

                    {/* Date and Email Fields */}
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label htmlFor="date" className="mb-2.5 block text-black dark:text-white">
                          Date
                        </label>
                        <input
                          id="date"
                          type="datetime-local"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.date}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.date && formik.errors.date ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.date && formik.errors.date && <div className="text-red-500">{formik.errors.date}</div>}
                      </div>

                      <div className='w-full mb-4.5'>
                        <label htmlFor='email' className='mb-2.5 block text-black dark:text-white'>
                          Email <span className='text-meta-1'>*</span>
                        </label>
                        <input
                          id='email'
                          type='email'
                          placeholder='Entrez votre adresse email'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90'
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
