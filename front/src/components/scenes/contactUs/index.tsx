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
                    <form
                        style={{ color: 'black' }}
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                        method="POST"
                    >
                        <input
                            className={`${inputStyles} text-black`} // Ajout de la classe text-black pour le texte noir
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />

                        {errors.name && (
                            <p className="mt-1 text-primary-500 text-red">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}

                        <input
                            className={`${inputStyles} text-black`}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500 text-red">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                           className={`${inputStyles} text-black`}
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 char."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
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
