/** @format */

import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { useDeleteCandidatureMutation, useGetCandidaturesQuery } from "../../store/api/CandidatureApp";
import '../../asset/css/user.css';

const ListeCandidature = () => {
    const { data, isLoading } = useGetCandidaturesQuery();
    const [deleteCandidat] = useDeleteCandidatureMutation();
    const [searchTerm, setSearchTerm] = useState("");
    console.log("data =>", data);

    const handleDelete = async (id: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce Candidat ?")) {
            try {
                await deleteCandidat(id).unwrap();
            } catch (error) {
                alert("Erreur lors de la suppression du candidat.");
            }
        }
    };

    //const filteredCandidats = data.filter((Candidat) =>
    //Candidat.anneeExperience.toString().includes(searchTerm) ||
    // Candidat.modalite.toLowerCase().includes(searchTerm.toLowerCase())
    //);

    return (
        <>
            <Breadcrumb pageName="Liste Candidatures" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="max-w-full overflow-x-auto">

                    <div className="d-flex flex-row align-items-center justify-content-between">
                        {/* <h2 className="text-center mb-4">Liste des Candidatures</h2> */}
                        <label htmlFor="">.</label>
                        <div className="d-flex justify-content-between w-50 mb-4 p-2 border rounded w-80">
                            <input type="search" placeholder="Rechercher..." className="p-2 border rounded " />
                            <button className="btn btn-info p-2 ms-2">Rechercher</button>
                        </div>
                    </div>


                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Niveau Étude
                                    </th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                        Année d'Expérience
                                    </th>
                                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                        Modalité
                                    </th>
                                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((Candidature) => (
                                    <tr key={Candidature.id}>
                                        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                            <h5 className="font-medium text-black dark:text-white">
                                                {Candidature.score}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {Candidature.score}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p>{Candidature.score}</p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <div className="flex Candidatures-center space-x-3.5">
                                                <Link to={`/dashboard/Candidature/Edit_Candidature/${Candidature.id}`} className="hover:text-primary">
                                                    <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18">
                                                        <path d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z" />
                                                    </svg>
                                                </Link>
                                                <button onClick={() => handleDelete(Candidature.id)} className="hover:text-primary">
                                                    <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18">
                                                        <path d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z" />
                                                    </svg>
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

export default ListeCandidature;
