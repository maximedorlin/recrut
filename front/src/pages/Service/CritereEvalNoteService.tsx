

import { api, headerAPI } from "../config/axios";
import { ICritereEvalNote } from "../interfaces/CritereEvalNoteInterface";



 class CritereEvalNoteService {

    private apiURL = "CritereEvalNotes";

    public async getAll() {
        try {
            console.log("Consulto")
            const response = await api.get<ICritereEvalNote[]>(`${this.apiURL}`)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:ICritereEvalNote) {
        try {
            const response = await api.post<ICritereEvalNote>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(idCritereEvalNote:number){
        try {
            const response = await api.get<ICritereEvalNote>(`${this.apiURL}/${idCritereEvalNote}`, headerAPI)
            const data: ICritereEvalNote = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:ICritereEvalNote) {
        try {
            const response = await api.put<ICritereEvalNote>(`${this.apiURL}/${data.idCritereEvalNote}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:ICritereEvalNote) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.idCritereEvalNote}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}
export default CritereEvalNoteService