
import { ISondage } from "../interfaces/SondageInterface";
import { api, headerAPI } from "../config/axios";



 class SondageService {

    private apiURL = "sondages";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<ISondage[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:ISondage) {
        try {
            const response = await api.post<ISondage>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idSondage:number){
        try {
            const response = await api.get<ISondage>(`${this.apiURL}/${idSondage}`, headerAPI)
            const data: ISondage = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:ISondage) {
        try {
            const response = await api.put<ISondage>(`${this.apiURL}/${data.idSondage}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:ISondage) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idSondage}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default SondageService;