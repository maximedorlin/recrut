

import { api, headerAPI } from "../config/axios";
import { ICritereEval } from "../interfaces/CritereEvalInterface";


 class CritereEvalService {

    private apiURL = "CritereEvals";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<ICritereEval[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:ICritereEval) {
        try {
            const response = await api.post<ICritereEval>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idCritereEval:number){
        try {
            const response = await api.get<ICritereEval>(`${this.apiURL}/${idCritereEval}`, headerAPI)
            const data: ICritereEval = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:ICritereEval) {
        try {
            const response = await api.put<ICritereEval>(`${this.apiURL}/${data.idCritereEval}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:ICritereEval) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idCritereEval}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default CritereEvalService