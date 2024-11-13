/** @format */

import * as yup from "yup";
import { useFormik } from "formik";
import { CgSpinner } from "react-icons/cg";
import { useCreateUserMutation, useGetUsersQuery } from "../../store/api/UserApp";
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb.tsx';
import { User } from "../../interfaces/mainInterfaces.ts";
import toast from "react-hot-toast";


const Form_Utilisateur = () => {
	const { refetch } = useGetUsersQuery();
	// const searchParams = new URLSearchParams(location.search);
	// const next = searchParams.get("next") || "";

	const [Create, { isLoading }] = useCreateUserMutation();

	const validationSchema = yup.object().shape({
		name: yup.string()
			.required("Ce champs est requis"),
		email: yup.string()
			.required("Ce champs est requis"),
		password: yup.string()
			.required("Ce champs est requis"),
		phoneNumber: yup.string()
			.required("Ce champs est requis"),
		role: yup.string()
			.required("Ce champs est requis"),
	});

	const formik = useFormik<Omit<User, "idUser">>({
		initialValues: {
			name: "",
			email: "",
			password: "",
			phoneNumber: "",
			role: "",
			id: 0
		},
		validationSchema: validationSchema,
		onSubmit: (values: Omit<User, "idUser">) => handleSubmit(values),
	});
	const handleSubmit = async (values: Omit<User, "id">) => {
		const res = await Create(values);
		console.log("RESPONSE ", res);

		if ("data" in res) {
			toast.success("Successfully ADDED");
			refetch();
			// await storeToken(payload);
		} else {
			toast.error("Une erreur est survenue");

			return; // Retour anticipé en cas d'erreur
		}
	};


	return (
		<>
			<Breadcrumb pageName="Formulaire Utilisateur" />

			<div className="text-center text-2xl">Formulaire Utilisateur</div>

			<div
				className="space-y-4 md:space-y-6"
				onSubmit={() => formik.handleSubmit()}>

				<div className="grid grid-cols-1 gap-3">
					<div>
						<label
							htmlFor="name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Nom et prenom
						</label>
						<input
							{...formik.getFieldProps("name")}
							type="text"
							id="name"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.name
								? "border-red-500"
								: "border-red-500stroke"
								}`}
							placeholder="Nom utilisateur"
						/>
						{formik.errors.name && (
							<p className="text-red-500 text-sm">
								{formik.errors.name}
							</p>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 gap-3">
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							password
						</label>
						<input
							{...formik.getFieldProps("password")}
							type="text"
							id="password"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.password ? "border-red-500" : "border-red-500stroke"
								}`}
							placeholder="password"
						/>
						{formik.errors.password && (
							<p className="text-red-500 text-sm">{formik.errors.password}</p>
						)}
					</div>

					<div>
						<label
							htmlFor="password1"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							remplier encore password
						</label>
						<input
							{...formik.getFieldProps("password1")}
							type="password"
							id="password1"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors?.password
								? "border-red-500"
								: "border-red-500stroke"
								}`}
							placeholder="password1"
						/>
						{formik.errors.password && (
							<p className="text-red-500 text-sm">{formik.errors.password}</p>
						)}
					</div>

				</div>


				<div className="grid grid-cols-1 gap-3">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							email
						</label>
						<input
							{...formik.getFieldProps("email")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors?.email
								? "border-red-500"
								: "border-red-500stroke"
								}`}
							placeholder="email"
						/>
						{formik.errors.email && (
							<p className="text-red-500 text-sm">{formik.errors.email}</p>
						)}
					</div>

					<div>
						<label
							htmlFor="phoneNumber"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							nomero de telephone
						</label>
						<input
							{...formik.getFieldProps("phoneNumber")}
							type="text"
							id="phoneNumber"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors?.phoneNumber
								? "border-red-500"
								: "border-red-500stroke"
								}`}
							placeholder="phoneNumber"
						/>
						{formik.errors.phoneNumber && (
							<p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>
						)}
					</div>
				</div>


				<div>
					<label
						htmlFor="role"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						role
					</label>
					<select
						{...formik.getFieldProps("role")}
						id="role"
						className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
						<option value="" disabled selected>
							Choisir un role
						</option>
						<option value="Recruteur">Recruteur</option>
						<option value="Admin"> Admin</option>
						<option value="Admin"> Candidat</option>
						className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.role ? "border-red-500" : "border-red-500stroke"
							}`}
					</select>
					{formik.errors.role && (
						<p className="text-red-500 text-sm">{formik.errors.role}</p>
					)}
				</div>

				<button
					disabled={isLoading}
					onClick={() => formik.handleSubmit()}
					className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
					{isLoading ? (
						<span className="animate-spin w-full justify-center items-center flex">
							<CgSpinner />
						</span>
					) : (
						"Ajouter"
					)}
				</button>
			</div>

		</>
	);
};

export default Form_Utilisateur;

function handleSubmit(
	// values: Omit<User, "idUser">
): void | Promise<any> {
	throw new Error("Function not implemented.");
}

