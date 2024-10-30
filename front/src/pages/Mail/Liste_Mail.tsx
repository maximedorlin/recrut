/** @format */

import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { useDeleteMailMutation, useGetMailsQuery } from "../../store/api/MailApi";

const ListeMails = () => {
    const { data = [], isLoading } = useGetMailsQuery();
    const [deleteMail] = useDeleteMailMutation();

    const handleDelete = async (id: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce mail ?")) {
            try {
                await deleteMail(id).unwrap();
            } catch (error) {
                alert("Erreur lors de la suppression du mail.");
            }
        }
    };

    return (
        <>
            <Breadcrumb pageName="Liste des Mails" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <Link to="/dashboard/Mail/Form_Mail" className="btn btn-primary mb-2 mt-3">Ajouter Mail</Link>
                    <h2 className="text-center mb-4">Liste des Mails</h2>
                    <input 
                        type="search" 
                        className="mb-4 p-2 border rounded" 
                        placeholder="Rechercher..." 
                    />
                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                                        Type de Mail
                                    </th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                        Description
                                    </th>
                                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                        Contenu
                                    </th>
                                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((mail) => (
                                    <tr key={mail.id}>
                                        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark">
                                            <h5 className="font-medium text-black dark:text-white">
                                                {mail.typeMail}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {mail.descriptionMail}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p>{mail.contenuMail}</p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <div className="flex items-center space-x-3.5">
                                                <Link to={`/dashboard/Mail/Form_Mail/${mail.id}`} className="hover:text-primary">
                                                    Modifier
                                                </Link>
                                                <button onClick={() => handleDelete(mail.id)} className="hover:text-primary">
                                                    Supprimer
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};

export default ListeMails;
