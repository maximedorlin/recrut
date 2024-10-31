

import { api, headerAPI } from "../config/axios";
import { ICompetence } from "../interfaces/CompetenceInterface";



 class CompetenceService {

    private apiURL = "Competences";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<ICompetence[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:ICompetence) {
        try {
            const response = await api.post<ICompetence>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idCompetence:number){
        try {
            const response = await api.get<ICompetence>(`${this.apiURL}/${idCompetence}`, headerAPI)
            const data: ICompetence = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:ICompetence) {
        try {
            const response = await api.put<ICompetence>(`${this.apiURL}/${data.idCompetence}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:ICompetence) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idCompetence}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default CompetenceService