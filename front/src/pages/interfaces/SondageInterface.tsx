
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ISondage {
    idSondage: number;
    titre: string;
    quetion: string;
    reponces: string;
}

export class Sondage implements ISondage {
    public idSondage: number;
    public titre: string;
    public quetion: string;
    public reponces: string;

    constructor() {
        this.idSondage = 1;  
        this.titre = "";
        this.quetion = "";
        this.reponces = "";
    }
}

export interface SondageState {
    data: ISondage;
    list: ISondage[]
}

export const initialState: SondageState = {
    data: new Sondage(),
    list: []
} 

export const SondageInterface = createSlice({
    name: 'Sondage',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<ISondage>) => {
            state.data = action.payload
        },
        setSondages: (state, action: PayloadAction<ISondage[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setSondages } = SondageInterface.actions

export default SondageInterface.reducer