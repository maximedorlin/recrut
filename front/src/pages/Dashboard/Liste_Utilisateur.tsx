import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces/mainInterfaces';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useDeleteUserMutation, useGetUsersQuery } from '../../store/api/UserApp';
import '../../asset/css/user.css';

const Liste_Utilisateure = () => {
  const { data, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [openDialog, setOpenDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  console.log("data =>", data);

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
    setOpenDialog(false);
  };

  const openConfirmationDialog = (user: User) => {
    setUserToDelete(user);
    setOpenDialog(true);
  };

  return (
    <>
      <Breadcrumb pageName="Liste Utilisateur" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">


          <div className="d-flex flex-row align-items-center justify-content-between">
          
            <Link to="/dashboard/Utilisateur/Form_Utilisateur" className="btn btn-success mb-2 mt-3">Ajouter Utilisateur</Link>

            {/* <h2 className="text-center mb-4">Liste Utilisateurs</h2> */}

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
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">Nom User</th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Email</th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Role</th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((user: User, index) => (
                  <tr key={index}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">{user.name}</h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{user.email}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p>{user.role}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <Link to={`/dashboard/Utilisateur/Editer_Utilisateur/${user.id}`} className="hover:text-primary">Éditer</Link>
                        <button onClick={() => openConfirmationDialog(user)} className="hover:text-primary">Supprimer</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <p>Êtes-vous sûr de vouloir supprimer l'utilisateur {userToDelete?.username} ?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">Annuler</Button>
          <Button 
        //   onClick={() => handleDeleteUser(userToDelete?.idUser)}
           color="primary">Supprimer</Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

export default Liste_Utilisateure;
