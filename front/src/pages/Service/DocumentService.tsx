

import { api, headerAPI } from "../config/axios";
import { IDocument } from "../interfaces/DocumentInterface";



 class DocumentService {

    private apiURL = "Documents";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<IDocument[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IDocument) {
        try {
            const response = await api.post<IDocument>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idDocument:number){
        try {
            const response = await api.get<IDocument>(`${this.apiURL}/${idDocument}`, headerAPI)
            const data: IDocument = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:IDocument) {
        try {
            const response = await api.put<IDocument>(`${this.apiURL}/${data.idDocument}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IDocument) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idDocument}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default DocumentService