import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateSondageMutation, useUpdateSondageMutation } from "../../store/api/SondageApp";
import { useEffect } from "react";

const FormSondage = () => {
    const [createSondage, { isSuccess: isCreateSuccess }] = useCreateSondageMutation();
    const [updateSondage, { isSuccess: isUpdateSuccess }] = useUpdateSondageMutation();

    const validationSchema = Yup.object({
        titre: Yup.string()
            .min(2, "Minimum 2 caractères")
            .required("Ce champ est requis"),
        question: Yup.string()
            .min(5, "Minimum 5 caractères")
            .required("Ce champ est requis"),
        reponse: Yup.string()
            .required("Ce champ est requis"),
        date: Yup.date()
            .required("Ce champ est requis")
            .nullable(),
        reponseVrai: Yup.string() // Assuming this is meant to be a string for a valid response
            .required("Ce champ est requis"),
    });

    const formik = useFormik({
        initialValues: {
            id: 0,
            titre: "",
            question: "",
            reponse: "",
            reponseVrai: "", // Changed to string
        },
        validationSchema,
        onSubmit: async (values) => {
            // const { id, ...data } = values; // Omit id for create
            // if (id) {
            //     await updateSondage(values).unwrap();
            // } else {
            //     await createSondage(data).unwrap();
            // }
        },
    });

    useEffect(() => {
        if (isCreateSuccess || isUpdateSuccess) {
            alert("Sondage sauvegardé avec succès !");
            formik.resetForm();
        }
    }, [isCreateSuccess, isUpdateSuccess]);

    return (
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
            <div className="flex flex-col gap-9">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">Formulaire de Sondage</h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="p-6.5">
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">Titre</label>
                                    <input
                                        id="titre"
                                        type="text"
                                        placeholder="Titre du sondage"
                                        {...formik.getFieldProps('titre')}
                                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary ${formik.touched.titre && formik.errors.titre ? 'border-red-500' : ''}`}
                                    />
                                    {formik.touched.titre && formik.errors.titre && <p className="mt-1 text-m text-red-400">{formik.errors.titre}</p>}
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">Question</label>
                                    <input
                                        id="question"
                                        type="text"
                                        placeholder="Question"
                                        {...formik.getFieldProps('question')}
                                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary ${formik.touched.question && formik.errors.question ? 'border-red-500' : ''}`}
                                    />
                                    {formik.touched.question && formik.errors.question && <p className="mt-1 text-m text-red-400">{formik.errors.question}</p>}
                                </div>
                            </div>

                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">Réponse</label>
                                    <input
                                        id="reponse"
                                        type="text"
                                        placeholder="Réponse 1"
                                        {...formik.getFieldProps('reponse')}
                                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary ${formik.touched.reponse && formik.errors.reponse ? 'border-red-500' : ''}`}
                                    />
                                    {formik.touched.reponse && formik.errors.reponse && <p className="mt-1 text-m text-red-400">{formik.errors.reponse}</p>}
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">Réponse Vraie</label>
                                    <input
                                        id="reponseVrai"
                                        type="text"
                                        placeholder="Réponse correcte"
                                        {...formik.getFieldProps('reponseVrai')}
                                        className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary ${formik.touched.reponseVrai && formik.errors.reponseVrai ? 'border-red-500' : ''}`}
                                    />
                                    {formik.touched.reponseVrai && formik.errors.reponseVrai && <p className="mt-1 text-m text-red-400">{formik.errors.reponseVrai}</p>}
                                </div>
                            </div>

                            <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormSondage;
