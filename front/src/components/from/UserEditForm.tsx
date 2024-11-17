/** @format */

import * as yup from "yup";
import { useFormik } from "formik";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";
import { User } from "../../interfaces/mainInterfaces";
import { useGetUsersQuery, useUpdateUserMutation } from "../../store/api/UserApp";


const UserEditForm = ({ User }: { User: User }) => {
	const { refetch } = useGetUsersQuery();

	const [Update, { isLoading }] = useUpdateUserMutation();

	const validationSchema = yup.object().shape({
		username: yup.string().required("Ce champs est requis"),
		email: yup.string().required("Ce champs est requis"),
		phoneNumber:  yup.string().required("Ce champs est requis"),
		password: yup.string().required("Ce champs est requis"),
		role: yup.string().required("Ce champs est requis"),

	});

	const formik = useFormik<Omit<User, "id">>({
		initiale: {
			name: User.name,
			email: User.email,
			phoneNumber: User.phoneNumber,
			password: User.password,
			role: User.role,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			const b: User = { ...values, id: User.id };
			handleSubmit(b);
		},
	});
	const handleSubmit = async (values: User) => {
		const res = await Update(values);
		console.log("RESPONSE ", res);

		if ("data" in res) {
			toast.success("Updated successfully");
			refetch();
			// await storeToken(payload);
		} else {
			toast.error("Une erreur est survenue");

			return; // Retour anticipé en cas d'erreur
		}
	};

	return (
		<div>
			<div className="text-center text-2xl">Modification User</div>

			<div
				className="space-y-4 md:space-y-6"
				onSubmit={() => formik.handleSubmit()}>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							role
						</label>
						<input
							{...formik.getFieldProps("role")}
							type="text"
							id="password"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.role ? "border-red-500" : "border-red-500stroke"
								}`}
							placeholder="role"
						/>
						{formik.errors.role && (
							<p className="text-red-500 text-sm">{formik.errors.role}</p>
						)}
					</div>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							username
						</label>
						<input
							{...formik.getFieldProps("username")}
							type="text"
							id="password"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.name
									? "border-red-500"
									: "border-red-500stroke"
								}`}
							placeholder="role"
						/>
						{formik.errors.name && (
							<p className="text-red-500 text-sm">{formik.errors.name}</p>
						)}
					</div>

					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							email
						</label>
						<input
							{...formik.getFieldProps("email")}
							type="date"
							id="password"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.email
									? "border-red-500"
									: "border-red-500stroke"
								}`}
							placeholder="code postal"
						/>
						{formik.errors.email && (
							<p className="text-red-500 text-sm">
								{formik.errors.email}
							</p>
						)}
					</div>
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

export default UserEditForm;
