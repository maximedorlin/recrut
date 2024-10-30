import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IJob {
    idJob: number | null,  
    titreJob: string,
    fichierAnnonce: string,
    annonce: string,
    statut: boolean,
    typeContrat: string,
    datePost: Date | null,
    dateLimite: Date  
}

export class Job implements IJob {
    public idJob: number | null; 
    public titreJob: string;
    public fichierAnnonce: string;
    public annonce: string;
    public statut: boolean;
    public typeContrat: string;
    public datePost: Date | null;
    public dateLimite: Date;  

    constructor() {
        this.idJob = null;  
        this.titreJob = "";
        this.fichierAnnonce = "";
        this.annonce = ""; 
        this.statut = false; 
        this.typeContrat = "";
        this.datePost = null;
        this.dateLimite = new Date();  
    }
}



export interface JobState {
    data: IJob;
    list: IJob[]
}

export const initialState: JobState = {
    data: new Job(),
    list: []
} 

export const JobSlice = createSlice({
    name: 'Job',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<IJob>) => {
            state.data = action.payload
        },
        setJobs: (state, action: PayloadAction<IJob[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setJobs } = JobSlice.actions

export default JobSlice.reducer