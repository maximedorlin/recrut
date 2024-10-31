

import { api, headerAPI } from "../config/axios";
import { IPostuler } from "../interfaces/CandidatureInterface";




 class PostulerService {

    private apiURL = "Postulers";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<IPostuler[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IPostuler) {
        try {
            const response = await api.post<IPostuler>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idPostuler:number){
        try {
            const response = await api.get<IPostuler>(`${this.apiURL}/${idPostuler}`, headerAPI)
            const data: IPostuler = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:IPostuler) {
        try {
            const response = await api.put<IPostuler>(`${this.apiURL}/${data.idPostuler}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IPostuler) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idPostuler}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default PostulerService