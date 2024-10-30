

import { api, headerAPI } from "../config/axios";
import { IEvaluation } from "../interfaces/EvaluationInterface";



 class EvaluationService {

    private apiURL = "Evaluations";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<IEvaluation[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IEvaluation) {
        try {
            const response = await api.post<IEvaluation>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idEvaluation:number){
        try {
            const response = await api.get<IEvaluation>(`${this.apiURL}/${idEvaluation}`, headerAPI)
            const data: IEvaluation = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:IEvaluation) {
        try {
            const response = await api.put<IEvaluation>(`${this.apiURL}/${data.idEvaluation}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IEvaluation) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idEvaluation}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default EvaluationService