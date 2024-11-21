

import { useCreateUserMutation } from '../../store/api/UserApp';
import * as Yup from 'yup';
import { User } from '../../interfaces/mainInterfaces';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import '../Accueil/offre.css';
import { CgSpinner } from 'react-icons/cg';
import toast from 'react-hot-toast';
import { LoginSuccess, RootLoginError } from '../../interfaces/user.ts';
import { initialState, loginSuccess } from '../../store/slices/AuthSlice.ts';
import { useLoginUserMutation } from '../../store/api/AuthenticationApi.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Navbar1 from '../../components/scenes/navbar/index.tsx';
import th from '../../asset/images/user/th.png';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb.tsx';

interface Log {
  email: string;
  password: string;
}

const Compte = () => {





  const [createUser] = useCreateUserMutation();

  // Fonction pour valider et envoyer les données à l'API
  async function valider(data: User) {
    try {
      console.log("Données envoyées:", data); // Log les données envoyées
      const response = await createUser(data).unwrap();
      console.log("Réponse de l'API:", response); // Log de la réponse
      alert("L'utilisateur a été créé avec succès !");
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      alert("Une erreur s'est produite lors de la création de l'utilisateur.");
    }
  }

  // Utilisation de Formik pour la gestion des formulaires
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Le nom est requis')
        .min(2, 'Le nom doit contenir au moins 2 caractères')
        .max(50, 'Le nom ne peut pas dépasser 50 caractères')
        .nullable(),

      phoneNumber: Yup.string()
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

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Les mots de passe doivent correspondre')
        .required('La confirmation du mot de passe est requise')
        .nullable(),

      role: Yup.string()
        .required('Le rôle est requis')
        .nullable(),
    }),
    onSubmit: async (values) => {
      console.log('Formulaire soumis', values); // Log les valeurs du formulaire
      const data: User = {
        name: values.name,
        phoneNumber: values.phoneNumber,
        email: values.email,
        password: values.password,
        // confirmPassword: values.confirmPassword,
        role: values.role,
        id: 0,
      };

      await valider(data);
      formik.resetForm();
    },
  });

  return (
    <>
      <div className="mx-auto ">
        <Breadcrumb pageName="Profile" />
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 padding-20">
          <div className="flex flex-col gap-9">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white" style={{ fontSize: '1.6rem' }}>Profile</h3>
              </div>
              <form onSubmit={formik.handleSubmit}>

                <div className="p-6.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4.5">
                    {/* Champ Titre de l'Offre */}
                    <div className="mb-4.5">
                      <label htmlFor="name" className="mb-2.5 block text-black dark:text-white">Nom <span className="text-meta-1">*</span></label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Entrez le nom"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                      />
                      {formik.touched.name && formik.errors.name && <div className="text-red-500">{formik.errors.name}</div>}
                    </div>

                    {/* Phone Number Field */}
                    <div className="w-full md:w-1/2">
                      <label htmlFor="phoneNumber" className="mb-2.5 block text-black dark:text-white">Numéro de téléphone <span className="text-meta-1">*</span></label>
                      <input
                        id="phoneNumber"
                        type="text"
                        placeholder="Entrez votre numéro de téléphone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : ''}`}
                      />
                      {formik.touched.phoneNumber && formik.errors.phoneNumber && <div className="text-red-500">{formik.errors.phoneNumber}</div>}
                    </div>
                  </div>

                  {/* Password and Confirm Password Fields */}
                  <div className="mb-4.5 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label htmlFor="password" className="mb-2.5 block text-black dark:text-white">
                        Mot de passe
                        <span className="text-meta-1">*</span>
                      </label>
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

                    <div className="w-full md:w-1/2">
                      <label htmlFor="confirmPassword" className="mb-2.5 block text-black dark:text-white">
                        Confirmer password
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirmez votre mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''}`}
                      />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500">{formik.errors.confirmPassword}</div>}
                    </div>
                  </div>

                  {/* Email Field */}

                  <div className="mb-4.5 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
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
                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                      />
                      {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                    </div>

                    {/* Role Field */}
                    <div className="w-full md:w-1/2">
                      <label htmlFor="role" className="mb-2.5 block text-black dark:text-white">
                        Role
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        id="role"
                        type="text"
                        placeholder="Entrez le rôle"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.role}
                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary ${formik.touched.role && formik.errors.role ? 'border-red-500' : ''}`}
                      />
                      {formik.touched.role && formik.errors.role && <div className="text-red-500">{formik.errors.role}</div>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    className="flex ml-auto justify-center text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
                  >
                    Modifier
                  </button>
                </div>

              </form>
            </div>
          </div >
        </div >
      </div >
    </>
  );
};

export default Compte;






