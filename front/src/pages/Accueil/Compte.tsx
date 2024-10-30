import React from 'react';
import { useCreateUserMutation } from '../../store/api/UserApp'; // Assurez-vous que ce hook est importé
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from "./header";
import './offre.css';
import { User } from '../../interfaces/mainInterfaces';

const Compte = () => {
  const [createUser] = useCreateUserMutation();

  async function valider(data: User) {
    try {
      await createUser(data).unwrap();
      alert("L'utilisateur a été créé avec succès !");
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      alert("Une erreur s'est produite lors de la création de l'utilisateur.");
    }
  }

  const formik = useFormik({
    initialValues: {
      nom: '',
      telephone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      nom: Yup.string()
        .required('Le nom est requis')
        .min(2, 'Le nom doit contenir au moins 2 caractères')
        .max(50, 'Le nom ne peut pas dépasser 50 caractères')
        .nullable(),
      
      telephone: Yup.string()
        .required('Le numéro de téléphone est requis')
        .min(10, 'Le numéro de téléphone doit contenir au moins 10 caractères')
        .max(15, 'Le numéro de téléphone ne peut pas dépasser 15 caractères')
        .nullable(),
      
      email: Yup.string()
        .email('Email invalide')
        .required('L\'email est requis')
        .nullable(),
      
      password: Yup.string()
        .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
        .max(20, 'Le mot de passe ne peut pas dépasser 20 caractères')
        .required('Le mot de passe est requis')
        .nullable(),
      
      // confirmPassword: Yup.string()
      //   .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
      //   .required('La confirmation du mot de passe est requise')
      //   .nullable(),
    }),
    
    
    onSubmit: async (values) => {
      // const data = new User();
      // data.append('nom', values.nom);
      // data.append('telephone', values.telephone);
      // data.append('email', values.email);
      // data.append('password', values.password);
  
      // await valider(data as User);
      formik.resetForm();
    },
  });

  return (
    <>
      <Header />
      <div className="corps">
        <div style={{ width: '70%' }}>
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 m-30">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">Nouveau Compte</h3>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="p-6.5">
                    {/* Name Field */}
                    <div className="mb-4.5">
                      <label htmlFor="nom" className="mb-2.5 block text-black dark:text-white">Nom</label>
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

                    {/* Phone Number Field */}
                    <div className="mb-4.5">
                      <label htmlFor="telephone" className="mb-2.5 block text-black dark:text-white">Numéro de téléphone</label>
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

                    {/* Email Field */}
                    <div className="mb-4.5">
                      <label htmlFor="email" className="mb-2.5 block text-black dark:text-white">Email <span className="text-meta-1">*</span></label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Entrez votre adresse email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                      />
                      {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-4.5">
                      <label htmlFor="password" className="mb-2.5 block text-black dark:text-white">Mot de passe <span className="text-meta-1">*</span></label>
                      <input
                        id="password"
                        type="password"
                        placeholder="Entrez votre mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                      />
                      {formik.touched.password && formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-4.5">
                      <label htmlFor="confirm-password" className="mb-2.5 block text-black dark:text-white">Vérifiez votre mot de passe <span className="text-meta-1">*</span></label>
                      <input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirmez votre mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''}`}
                      />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500">{formik.errors.confirmPassword}</div>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    >
                      Valider
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional content can be added here */}
            <div className="flex flex-col gap-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compte;
