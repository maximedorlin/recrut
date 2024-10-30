
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface IDomaineCompetence {
    idDomaineComp: number;
    nomDomaineComp: string;
}

export class DomaineCompetence implements IDomaineCompetence {
    public idDomaineComp: number;
    public nomDomaineComp: string;

    constructor() {
        this.idDomaineComp = 1;  
        this.nomDomaineComp = "";
    }
}

export interface DomaineCompetenceState {
    data: IDomaineCompetence;
    list: IDomaineCompetence[]
}

export const initialState: DomaineCompetenceState = {
    data: new DomaineCompetence(),
    list: []
} 

export const DomaineCompetenceInterface = createSlice({
    name: 'DomaineCompetence',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<IDomaineCompetence>) => {
            state.data = action.payload
        },
        setDomaineCompetences: (state, action: PayloadAction<IDomaineCompetence[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setDomaineCompetences } = DomaineCompetenceInterface.actions

export default DomaineCompetenceInterface.reducer