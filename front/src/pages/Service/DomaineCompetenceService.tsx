

import { api, headerAPI } from "../config/axios";
import { IDomaineCompetence } from "../interfaces/DomaineCompetenceInterface";



 class DomaineCompetenceService {

    private apiURL = "DomaineCompetences";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<IDomaineCompetence[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IDomaineCompetence) {
        try {
            const response = await api.post<IDomaineCompetence>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idDomaineComp:number){
        try {
            const response = await api.get<IDomaineCompetence>(`${this.apiURL}/${idDomaineComp}`, headerAPI)
            const data: IDomaineCompetence = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:IDomaineCompetence) {
        try {
            const response = await api.put<IDomaineCompetence>(`${this.apiURL}/${data.idDomaineComp}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IDomaineCompetence) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idDomaineComp}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}

export default DomaineCompetenceService