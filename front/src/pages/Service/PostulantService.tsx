
import { IPostulant } from "../interfaces/PostulantInterface";
import { api, headerAPI } from "../config/axios";



 class PostulantService {

    private apiURL = "Postulants";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<IPostulant[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IPostulant) {
        try {
            const response = await api.post<IPostulant>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idCand:number){
        try {
            const response = await api.get<IPostulant>(`${this.apiURL}/${idCand}`, headerAPI)
            const data: IPostulant = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:IPostulant) {
        try {
            const response = await api.put<IPostulant>(`${this.apiURL}/${data.idCand}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IPostulant) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idCand}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default PostulantService