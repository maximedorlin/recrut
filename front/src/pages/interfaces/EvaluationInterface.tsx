
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface IEvaluation {
    idEvaluation: number;
    titre: string;
    dateEvaluation: string;
    decisionEvaluation: string;
}

export class Evaluation implements IEvaluation {
    public idEvaluation: number;
    public titre: string;
    public dateEvaluation: string;
    public decisionEvaluation: string; 

    constructor() {
        this.idEvaluation = 1;  
        this.titre = "";
        this.dateEvaluation = ""; 
        this.decisionEvaluation = ""; 
    }
}

export interface EvaluationState {
    data: IEvaluation;
    list: IEvaluation[]
}

export const initialState: EvaluationState = {
    data: new Evaluation(),
    list: []
} 

export const EvaluationInterface = createSlice({
    name: 'Evaluation',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<IEvaluation>) => {
            state.data = action.payload
        },
        setEvaluations: (state, action: PayloadAction<IEvaluation[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setEvaluations } = EvaluationInterface.actions

export default EvaluationInterface.reducer