
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICritereEval {
    idCritereEval: number;
    typeCritere: string;
    nomCritereEval: string;
}

export class CritereEval implements ICritereEval {
    public idCritereEval: number;
    public typeCritere: string;
    public nomCritereEval: string;

    constructor() {
        this.idCritereEval = 1;  
        this.typeCritere = "";
        this.nomCritereEval = "";
    }
}

export interface CritereEvalState {
    data: ICritereEval;
    list: ICritereEval[]
}

export const initialState: CritereEvalState = {
    data: new CritereEval(),
    list: []
} 

export const CritereEvalInterface = createSlice({
    name: 'CritereEval',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<ICritereEval>) => {
            state.data = action.payload
        },
        setCritereEvals: (state, action: PayloadAction<ICritereEval[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setCritereEvals } = CritereEvalInterface.actions

export default CritereEvalInterface.reducer