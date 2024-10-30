/** @format */

import React, { useEffect, useState } from "react";
import { useCreateMailMutation, useUpdateMailMutation } from "../../store/api/MailApi";
import { Mail } from "../../interfaces/mainInterfaces";
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Form_Mail = () => {
    const [mailData, setMailData] = useState<Mail>({ id: 0, typeMail: '', descriptionMail: '', contenuMail: '' });
    const [errorForm, setErrorForm] = useState<{ [key: string]: boolean }>({});
    const [createMail, { isSuccess: isCreateSuccess }] = useCreateMailMutation();
    const [updateMail, { isSuccess: isUpdateSuccess }] = useUpdateMailMutation();

    const inputCSS = "w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary";
    const inputError = "border-red-500";

    const setFormValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setMailData((prev) => ({ ...prev, [id]: value }));
        setErrorForm((prev) => ({ ...prev, [id]: false }));
    };

    const validateForm = () => {
        const errors = {
            typeMail: !mailData.typeMail,
            descriptionMail: !mailData.descriptionMail,
            contenuMail: !mailData.contenuMail,
        };
        setErrorForm(errors);
        return !Object.values(errors).includes(true);
    };

    const fetchCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            await createMail(mailData).unwrap();
        }
    };

    const fetchUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            await updateMail(mailData).unwrap();
        }
    };

    useEffect(() => {
        if (isCreateSuccess || isUpdateSuccess) {
            alert("Mail saved successfully!");
            setMailData({ id: 0, typeMail: '', descriptionMail: '', contenuMail: '' });
        }
    }, [isCreateSuccess, isUpdateSuccess]);

    return (
        <>
            {/* <Breadcrumb pageName="Form Mail" /> */}
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">Nouveau Mail</h3>
                        </div>
                        <form onSubmit={(e) => mailData.id ? fetchUpdate(e) : fetchCreate(e)}>
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">Type mail</label>
                                        <input
                                            id="typeMail"
                                            type="text"
                                            placeholder="Type du mail"
                                            value={mailData.typeMail}
                                            onChange={setFormValue}
                                            className={`${inputCSS} ${errorForm.typeMail ? inputError : ''}`}
                                            aria-invalid={errorForm.typeMail}
                                        />
                                        {errorForm.typeMail && <p className="mt-1 text-m text-red-400">This field is required</p>}
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">Pièces jointes</label>
                                        <input
                                            type="file"
                                            className={`${inputCSS} ${errorForm.descriptionMail ? inputError : ''}`}
                                            aria-invalid={errorForm.descriptionMail}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2.5 block text-black dark:text-white">Destinataire</label>
                                    <input
                                        id="descriptionMail"
                                        type="email"
                                        placeholder="Destinataire"
                                        value={mailData.descriptionMail}
                                        onChange={setFormValue}
                                        className={`${inputCSS} ${errorForm.descriptionMail ? inputError : ''}`}
                                        aria-invalid={errorForm.descriptionMail}
                                    />
                                    {errorForm.descriptionMail && <p className="mt-1 text-m text-red-400">This field is required</p>}
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2.5 block text-black dark:text-white">Description</label>
                                    <textarea
                                        id="contenuMail"
                                        rows={6}
                                        placeholder="description message"
                                        value={mailData.contenuMail}
                                        onChange={setFormValue}
                                        className={`${inputCSS} ${errorForm.contenuMail ? inputError : ''}`}
                                        aria-invalid={errorForm.contenuMail}
                                    />
                                    {errorForm.contenuMail && <p className="mt-1 text-m text-red-400">This field is required</p>}
                                </div>

                                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    {mailData.id ? "Save" : "Envoyer"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form_Mail;
