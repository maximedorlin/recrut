
import { IMail } from "../interfaces/MailInterface";
import { api, headerAPI } from "../config/axios";



 class MailService {
    static getAll(): IMail[] | PromiseLike<IMail[]> {
        throw new Error("Method not implemented.");
    }
    static delete(item: IMail) {
        throw new Error("Method not implemented.");
    }
    static getById(arg0: number): IMail | PromiseLike<IMail> {
        throw new Error("Method not implemented.");
    }

    private apiURL = "Mails";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<IMail[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IMail) {
        try {
            const response = await api.post<IMail>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idMail:number){
        try {
            const response = await api.get<IMail>(`${this.apiURL}/${idMail}`, headerAPI)
            const data: IMail = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(p0: number, p1: { typeMail: string; descriptionMail: string; contenuMail: number; }, data: IMail) {
        try {
            const response = await api.put<IMail>(`${this.apiURL}/${data.idMail}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IMail) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idMail}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default MailService