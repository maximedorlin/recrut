
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICompetence {
    idCompetence: number;
    titre: string;
    description: string;
}

export class Competence implements ICompetence {
    public idCompetence: number;
    public titre: string;
    public description: string;

    constructor() {
        this.idCompetence = 1;  
        this.titre = "";
        this.description = "";
    }
}

export interface CompetenceState {
    data: ICompetence;
    list: ICompetence[]
}

export const initialState: CompetenceState = {
    data: new Competence(),
    list: []
} 

export const CompetenceInterface = createSlice({
    name: 'Competence',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<ICompetence>) => {
            state.data = action.payload
        },
        setCompetences: (state, action: PayloadAction<ICompetence[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setCompetences } = CompetenceInterface.actions

export default CompetenceInterface.reducer