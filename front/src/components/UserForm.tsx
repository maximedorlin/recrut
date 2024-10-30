/** @format */

import * as yup from "yup";
import { useFormik } from "formik";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";
import { User } from "../interfaces/mainInterfaces";
import { useCreateUserMutation, useGetUsersQuery } from "../store/api/UserApp";


const UserForm = () => {
	const { refetch } = useGetUsersQuery();
	const searchParams = new URLSearchParams(location.search);
	const next = searchParams.get("next") || "";

	const [Create, { isLoading }] = useCreateUserMutation();

	const validationSchema = yup.object().shape({
		username: yup.string().required("Ce champs est requis"),
		email: yup.string().required("Ce champs est requis"),
		password: yup.string().required("Ce champs est requis"),
		status: yup.string().required("Ce champs est requis"),
	});

	const formik = useFormik<Omit<User, "idUser">>({
		initialValues: {
			username: "",
			email: "",
			password: "",
			status: [],
		},
		validationSchema: validationSchema,
		onSubmit: (values: Omit<User, "idUser">) => handleSubmit(values),
	});
	const handleSubmit = async (values: Omit<User, "idUser">) => {
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
		<div>
			<div className="text-center text-2xl">Formulaire User</div>

			<div
				className="space-y-4 md:space-y-6"
				onSubmit={() => formik.handleSubmit()}>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							password
						</label>
						<input
							{...formik.getFieldProps("password")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors.password ? "border-red-500" : "border-red-500stroke"
							}`}
							placeholder="password"
						/>
						{formik.errors.password && (
							<p className="text-red-500 text-sm">{formik.errors.password}</p>
						)}
					</div>

					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							status
						</label>
						<input
							{...formik.getFieldProps("status")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors?.status
									? "border-red-500"
									: "border-red-500stroke"
							}`}
							placeholder="status"
						/>
						{formik.errors.status && (
							<p className="text-red-500 text-sm">{formik.errors.status}</p>
						)}
					</div>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							username
						</label>
						<input
							{...formik.getFieldProps("username")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors.username
									? "border-red-500"
									: "border-red-500stroke"
							}`}
							placeholder="code postal"
						/>
						{formik.errors.username && (
							<p className="text-red-500 text-sm">
								{formik.errors.username}
							</p>
						)}
					</div>
				</div>

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
						className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
							formik.errors.email ? "border-red-500" : "border-red-500stroke"
						}`}
						placeholder="email"
					/>
					{formik.errors.email && (
						<p className="text-red-500 text-sm">{formik.errors.email}</p>
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
		</div>
	);
};

export default UserForm;
