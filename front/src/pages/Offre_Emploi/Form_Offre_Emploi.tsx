
import { useCreateOffreMutation } from '../../store/api/OffreApp';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { JobOffre } from '../../interfaces/mainInterfaces';

const Form_Offre_A = () => {

  const [createOffre] = useCreateOffreMutation();

  async function valider(data: JobOffre) {
    try {
      await createOffre(data).unwrap();
      console.log('Offre créée avec succès:', data);
      alert("L'offre a été créée avec succès !");
    } catch (error) {
      console.error('Erreur lors de la création de l\'offre:', error);
      alert("Une erreur s'est produite lors de la création de l'offre.");
    }
  }

  const formik = useFormik({
    initialValues: {
      titreOffre: '',
      datePost: '',
      fichierAnnonce: null,
      statut: false,
      typeContrat: '',
      dateLimite: '',
    },
    validationSchema: Yup.object({
      titreOffre: Yup.string().required('Le titre est requis'),
      fichierAnnonce: Yup.mixed().required('Le fichier d\'annonce est requis'),
      datePost: Yup.date().required('La date de publication est requise').nullable(),
      dateLimite: Yup.date().required('La date limite est requise').nullable(),
      typeContrat: Yup.string().required('Le type de contrat est requis'),
    }),
    onSubmit: async (values) => {
      // const data = new Offre();
      // data.append('titreOffre', values.titreOffre);
      // data.append('datePost', values.datePost);
      // data.append('fichierAnnonce', values.fichierAnnonce);
      // data.append('statut', values.statut ? 'true' : 'false');
      // data.append('typeContrat', values.typeContrat);
      // data.append('dateLimite', values.dateLimite);

      // await valider(data as Offre);
      formik.resetForm();
    },
  });
  return (
    <>
      <Breadcrumb pageName="Formulaire d'Offre d'Emploi" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 padding-20">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Nouvelle offre d'Emploi</h3>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="p-6.5">
                {/* Champ Titre de l'Offre */}
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Titre de l'offre</label>
                  <input
                    type="text"
                    name="titreOffre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.titreOffre}
                    placeholder="Titre de l'offre"
                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.titreOffre && formik.errors.titreOffre ? 'border-red-500' : ''}`}
                  />
                  {formik.touched.titreOffre && formik.errors.titreOffre && (
                    <div className="text-red-500">{formik.errors.titreOffre}</div>
                  )}
                </div>

                {/* Champ Fichier d'Annonce */}
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Fichier d'annonce</label>
                  <input
                    type="file"
                    name="fichierAnnonce"
                    onChange={(event) => {
                      const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
                      formik.setFieldValue("fichierAnnonce", file);
                    }}
                    onBlur={formik.handleBlur}
                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.fichierAnnonce && formik.errors.fichierAnnonce ? 'border-red-500' : ''}`}
                  />
                  {formik.touched.fichierAnnonce && formik.errors.fichierAnnonce && (
                    <div className="text-red-500">{formik.errors.fichierAnnonce}</div>
                  )}
                </div>

                {/* Champ Date de Publication */}
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Date de publication</label>
                  <input
                    type="datetime-local"
                    name="datePost"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.datePost}
                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.datePost && formik.errors.datePost ? 'border-red-500' : ''}`}
                  />
                  {formik.touched.datePost && formik.errors.datePost && (
                    <div className="text-red-500">{formik.errors.datePost}</div>
                  )}
                </div>

                {/* Champ Date Limite */}
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Date limite</label>
                  <input
                    type="datetime-local"
                    name="dateLimite"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dateLimite}
                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.dateLimite && formik.errors.dateLimite ? 'border-red-500' : ''}`}
                  />
                  {formik.touched.dateLimite && formik.errors.dateLimite && (
                    <div className="text-red-500">{formik.errors.dateLimite}</div>
                  )}
                </div>

                {/* Champ Type de Contrat */}
                <div className="mb-4.5">
                  <label htmlFor="typeContrat" className="mb-2.5 block text-black dark:text-white">Type de contrat</label>
                  <select
                    id="typeContrat"
                    name="typeContrat"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.typeContrat}
                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.typeContrat && formik.errors.typeContrat ? 'border-red-500' : ''}`}
                  >
                    <option value="" label="Choisir un type de contrat" />
                    <option value="CDD">CDD</option>
                    <option value="CDI">CDI</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                  {formik.touched.typeContrat && formik.errors.typeContrat && (
                    <div className="text-red-500">{formik.errors.typeContrat}</div>
                  )}
                </div>

                {/* Champ Statut */}
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="statut"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.statut}
                      className="mr-2"
                    />
                    Activer l'offre
                  </label>
                </div>

                {/* Bouton de Soumission */}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    Valider
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form_Offre_A;






// const Form_Offre_A = () => {

//   const [createOffre, { data, isSuccess }] = useCreateOffreMutation();

//   async function valider(data: Offre) {
//     try {
//       await createOffre(data).unwrap();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function handleSubmit () {
//     const data = {
//       titreOffre: 
//     }
//     valider(data as Offre);
//   }



