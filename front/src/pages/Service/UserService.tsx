
import { IUser } from "../interfaces/UserInterface";
import { api, headerAPI } from "../config/axios";



 class UserService {

    private apiURL = "users";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<IUser[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IUser) {
        try {
            const response = await api.post<IUser>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idUser:number){
        try {
            const response = await api.get<IUser>(`${this.apiURL}/${idUser}`, headerAPI)
            const data: IUser = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(p0: number, p1: { username: string; email: string; password: number; statut: string; }, data: IUser) {
        try {
            const response = await api.put<IUser>(`${this.apiURL}/${data.idUser}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IUser) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idUser}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default UserService;