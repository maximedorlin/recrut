/** @format */

import * as yup from "yup";
import { useFormik } from "formik";
import { CgSpinner } from "react-icons/cg";
import { useCreateUserMutation, useGetUsersQuery } from "../../store/api/UserApp.ts";
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb.tsx';
import { User } from "../../interfaces/mainInterfaces.ts";
import toast from "react-hot-toast";

const Form_Utilisateur = () => {
	const { refetch } = useGetUsersQuery();

	const [Create, { isLoading }] = useCreateUserMutation();

	// Schéma de validation
	const validationSchema = yup.object().shape({
		name: yup.string().required("Ce champ est requis"),
		email: yup.string().email("Email invalide").required("Ce champ est requis"),
		password: yup.string().required("Ce champ est requis"),
		phoneNumber: yup.string().required("Ce champ est requis"),
		role: yup.string().required("Ce champ est requis"),
	});

	// Utilisation de Formik
	const formik = useFormik<Omit<User, "idUser">>({
		initialValues: {
			name: "",
			email: "",
			password: "",
			phoneNumber: "",
			role: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values: Omit<User, "idUser">) => handleSubmit(values),
	});

	// Fonction handleSubmit
	const handleSubmit = async (values: Omit<User, "idUser">) => {
		const res = await Create(values);
		console.log("RESPONSE", res);

		if ("data" in res) {
			toast.success("Utilisateur ajouté avec succès");
			refetch(); // Recharger les utilisateurs après l'ajout
		} else {
			toast.error("Une erreur est survenue");
		}
	};

	return (
		<>
			<Breadcrumb pageName="Formulaire Utilisateur" />

			
				<div className="grid grid-cols-1 gap-9 sm:grid-cols-1 padding-20 flex flex-col gap-9">
					<div className="">
						<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
							<div className="text-center text-2xl mb-5">Formulaire Utilisateur</div>

							{/* Formulaire */}
							<form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
								{/* Nom et téléphone */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
									<div>
										<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Nom et prénom
										</label>
										<input
											{...formik.getFieldProps("name")}
											type="text"
											id="name"
											className={`bg-gray-50 border border-green-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.name ? "border-red-500" : ""}`}
											placeholder="Nom utilisateur"
										/>
										{formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
									</div>

									<div>
										<label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Numéro de téléphone
										</label>
										<input
											{...formik.getFieldProps("phoneNumber")}
											type="text"
											id="phoneNumber"
											className={`bg-gray-50 border border-green-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors?.phoneNumber ? "border-red-500" : ""}`}
											placeholder="Numéro de téléphone"
										/>
										{formik.errors.phoneNumber && <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>}
									</div>
								</div>

								{/* Mot de passe */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
									<div>
										<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Mot de passe
										</label>
										<input
											{...formik.getFieldProps("password")}
											type="password"
											id="password"
											className={`bg-gray-50 border border-green-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.password ? "border-red-500" : ""}`}
											placeholder="Mot de passe"
										/>
										{formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
									</div>

									<div>
										<label htmlFor="password1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Confirmer le mot de passe
										</label>
										<input
											{...formik.getFieldProps("password1")}
											type="password"
											id="password1"
											className={`bg-gray-50 border border-green-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors?.password ? "border-red-500" : ""}`}
											placeholder="Confirmer le mot de passe"
										/>
										{formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
									</div>
								</div>

								{/* Email et rôle */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
									<div>
										<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Email
										</label>
										<input
											{...formik.getFieldProps("email")}
											type="email"
											id="email"
											className={`bg-gray-50 border border-green-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors?.email ? "border-red-500" : ""}`}
											placeholder="Email"
										/>
										{formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
									</div>

									<div>
										<label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Rôle
										</label>
										<select
											{...formik.getFieldProps("role")}
											id="role"
											className="w-full rounded border-[1.5px] border-green-300 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
										>
											<option value="" disabled selected>
												Choisir un rôle
											</option>
											<option value="Recruteur">Recruteur</option>
											<option value="Admin">Admin</option>
											<option value="Candidat">Candidat</option>
										</select>
										{formik.errors.role && <p className="text-red-500 text-sm">{formik.errors.role}</p>}
									</div>
								</div>

								{/* Bouton de soumission */}
								<button
									disabled={isLoading}
									type="submit"
									className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									{isLoading ? (
										<span className="animate-spin w-full justify-center items-center flex">
											<CgSpinner />
										</span>
									) : (
										"Ajouter"
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
		
		</>
	);
};

export default Form_Utilisateur;
