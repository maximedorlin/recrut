import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { IUser, setData, setUsers, UserState } from "../interfaces/UserInterface";
import UserService  from '../Service/UserService';

export const Table = () => {
    const { User } = useSelector((state: { User: UserState }) => state);
    const userService = new UserService();
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const res: IUser[] = await userService.getAll();
            dispatch(setUsers(res));
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onClickDelete = (item: IUser) => {
        Swal.fire({
            title: 'Êtes-vous sûr de vouloir supprimer ?',
            showCancelButton: true,
            confirmButtonText: 'Confirmer',
        }).then((result) => {
            if (result.isConfirmed) {
                fetchDelete(item);
            }
        });
    };

    const fetchDelete = async (item: IUser) => {
        try {
            await userService.delete(item);
            Swal.fire({
                icon: 'success',
                title: 'L\'élément a été supprimé',
                showConfirmButton: false,
                timer: 1500,
            });
            fetchData();
        } catch (error) {
            console.error('Error deleting item:', error);
            Swal.fire({
                icon: 'error',
                title: 'Échec de la suppression',
                text: 'Une erreur est survenue lors de la suppression.',
            });
        }
    };

    const onClickInfo = async (item: IUser) => {
        try {
            const data: IUser = await userService.getById(item.idUser!);
            Swal.fire({
                title: 'Détails',
                icon: 'info',
                html:
                    `<b>Nom d'utilisateur</b> : ${data.username} <br>` +
                    `<b>Email</b> : ${data.email} <br>` +
                    `<b>Statut</b> : ${data.statut} <br>`,
                confirmButtonText: 'Ok',
            });
        } catch (error) {
            console.error('Error fetching details:', error);
            Swal.fire({
                icon: 'error',
                title: 'Échec de récupération des détails',
            });
        }
    };

    return (
        <div className="inline-block">
            <button className="bg-teal-600 text-gray-50 font-semibold py-2 px-4 rounded-lg" onClick={() => dispatch(setData({ idUser: 0, username: '', email: '', password: '', statut: '' }))}>
                Nouvel utilisateur
            </button>

            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-800">
                        <tr>
                            <th scope="col" className="px-12 py-3.5 text-slate-50 font-medium text-left">
                                Nom d'utilisateur
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-slate-50 font-medium text-left">
                                Email
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-slate-50 font-medium text-left">
                                Statut
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-slate-50 font-medium text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {User.list.map((item: IUser, i) => (
                            <tr key={i}>
                                <td className="px-12 py-4 whitespace-nowrap">{item.username}</td>
                                <td className="px-4 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-4 py-4 whitespace-nowrap">{item.statut}</td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="bg-sky-600 text-sky-50 font-semibold py-2 px-4 rounded-lg" onClick={() => onClickInfo(item)}>
                                            Info
                                        </button>
                                        <button className="bg-gray-600 text-gray-50 font-semibold py-2 px-4 rounded-lg" onClick={() => dispatch(setData(item))}>
                                            Éditer
                                        </button>
                                        <button className="bg-red-600 text-gray-50 font-semibold py-2 px-4 rounded-lg" onClick={() => onClickDelete(item)}>
                                            Supprimer
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
