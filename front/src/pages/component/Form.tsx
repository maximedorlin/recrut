import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useState } from "react";
import { IUser, setData, setUsers, UserState } from "../interfaces/UserInterface";
import UserService  from '../Service/UserService';

export const Form = () => {
    const { User } = useSelector((state: { User: UserState }) => state);
    const [errorForm, setErrorForm] = useState({
        username: false,
        email: false,
        password: false,
        statut: false,
    });

    const dispatch = useDispatch();
    const userService = new UserService();

    const isValidForm = () => {
        const error = {
            username: !User.data.username,
            email: !User.data.email,
            password: !User.data.password,
            statut: !User.data.statut,
        };

        setErrorForm(error);
        return Object.values(error).some(Boolean);
    };

    const setFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setData({ ...User.data, [event.target.id]: event.target.value }));
    };

    const fetchUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const updatedData: IUser = await userService.put(User.data.idUser!, {
                username: User.data.username,
                email: User.data.email,
                password: parseInt(User.data.password.toString(), 10),
                statut: User.data.statut,
            }, {
                idUser: 0,
                username: "",
                email: "",
                password: "",
                statut: ""
            }); // Passer les options si nécessaire

            const updatedList = User.list.map(item =>
                item.idUser === updatedData.idUser ? updatedData : item
            );

            dispatch(setUsers(updatedList));
            dispatch(setData({ idUser: 0, username: '', email: '', password: '', statut: '' }));

            Swal.fire({
                icon: 'success',
                title: 'Les données ont été mises à jour',
            });
        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : 'Une erreur s\'est produite';
            Swal.fire({
                icon: 'error',
                title: 'Échec de la mise à jour des données',
                text: errorMessage,
            });
        }
    };

    const fetchCreate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isValidForm()) return;

        try {
            const newUser: IUser = await userService.post({
                username: User.data.username,
                email: User.data.email,
                statut: User.data.statut,
                password: User.data.password,
                idUser: 0
            });

            dispatch(setData({ idUser: 0, username: '', email: '', password: '', statut: '' }));
            dispatch(setUsers([...User.list, newUser]));

            Swal.fire({
                icon: 'success',
                title: 'Les données ont été enregistrées',
            });
        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : 'Une erreur s\'est produite';
            Swal.fire({
                icon: 'error',
                title: 'Échec de l\'enregistrement des données',
                text: errorMessage,
            });
        }
    };

    const inputCSS = "block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40";
    const inputError = " border-red-400";

    return (
        <div className="px-8 py-4 pb-8 rounded-lg bg-gray-50">
            <form onSubmit={(e) => User.data.idUser ? fetchUpdate(e) : fetchCreate(e)}>
                <div className="mt-4">
                    <label className="mb-2 text-gray-800">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Artyom Developer"
                        value={User.data.username}
                        onChange={setFormValue}
                        className={errorForm.username ? inputCSS + inputError : inputCSS}
                    />
                    {errorForm.username && <p className="mt-1 text-m text-red-400">This field is required</p>}
                </div>
                <div className="mt-4">
                    <label className="mb-2 text-gray-800">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="example@example.com"
                        value={User.data.email}
                        onChange={setFormValue}
                        className={errorForm.email ? inputCSS + inputError : inputCSS}
                    />
                    {errorForm.email && <p className="mt-1 text-m text-red-400">This field is required</p>}
                </div>
                <div className="mt-4">
                    <label className="mb-2 text-gray-800">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={User.data.password}
                        onChange={setFormValue}
                        className={errorForm.password ? inputCSS + inputError : inputCSS}
                    />
                    {errorForm.password && <p className="mt-1 text-m text-red-400">This field is required</p>}
                </div>
                <div className="mt-4">
                    <label className="mb-2 text-gray-800">Status</label>
                    <input
                        id="statut"
                        type="text"
                        placeholder="Active or Inactive"
                        value={User.data.statut}
                        onChange={setFormValue}
                        className={errorForm.statut ? inputCSS + inputError : inputCSS}
                    />
                    {errorForm.statut && <p className="mt-1 text-m text-red-400">This field is required</p>}
                </div>
                <button className="w-full mt-8 bg-teal-600 text-gray-50 font-semibold py-2 px-4 rounded-lg">
                    {User.data.idUser ? "Save" : "Create"}
                </button>
            </form>
        </div>
    );
};
