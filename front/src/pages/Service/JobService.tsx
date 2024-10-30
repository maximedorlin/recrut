

import { api, headerAPI } from "../config/axios";
import { IJob } from "../interfaces/JobInterface";



export class JobService {

    private apiURL = "Jobs";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<IJob[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IJob) {
        try {
            const response = await api.post<IJob>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idJob:number){
        try {
            const response = await api.get<IJob>(`${this.apiURL}/${idJob}`, headerAPI)
            const data: IJob = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:IJob) {
        try {
            const response = await api.put<IJob>(`${this.apiURL}/${data.idJob}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IJob) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idJob}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default JobService