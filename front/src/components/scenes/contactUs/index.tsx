import { motion } from "framer-motion";
import th2 from '../../../asset/images/user/th2.png';
import { useForm } from "react-hook-form"; // Assuming you are using react-hook-form

const ContactUs = () => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    // Use the real useForm hook from react-hook-form
    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e: React.FormEvent) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault(); // Prevent the form submission if validation fails
        }
    };

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            {/* HEADER */}





            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <h1 className="fs-30 text-primary-500 my-5" style={{ fontSize: '3rem', color: 'green' }}>
                    laissez-nous un message
                </h1>
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >

                    <form action="#">
                        <div className="p-6.5">
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                {/* Nom */}
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Nom
                                        <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Entrez votre nom"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>

                                {/* Prénom */}
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Prénom
                                        <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Entrez votre prénom"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                {/* Téléphone */}
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Entrez votre numéro de téléphone"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>

                                {/* Email */}
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Email
                                        <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Entrez votre adresse e-mail"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Message
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Tapez votre message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                ></textarea>
                            </div>

                            {/* Bouton de soumission */}
                            <button
                                type="submit"
                                className="flex ml-auto justify-center text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
                            >
                                Soumettre
                            </button>
                        </div>
                    </form>
                </motion.div>

                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                        <img
                            className="w-full"
                            alt="contact-us-page-graphic"
                            src={th2}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
