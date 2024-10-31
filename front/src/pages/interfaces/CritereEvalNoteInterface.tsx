
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICritereEvalNote {
    idCritereEvalNote: number;
    note: number;
    dateEvaluation: Date;
    commentaire: string;
}

export class CritereEvalNote implements ICritereEvalNote {
    public idCritereEvalNote: number;
    public note: number;
    public dateEvaluation: Date;
    public commentaire: string;

    constructor() {
        this.idCritereEvalNote = 1;  
        this.note = 0;
        this.dateEvaluation = new Date;
        this.commentaire = "";
    }
}

export interface CritereEvalNoteState {
    data: ICritereEvalNote;
    list: ICritereEvalNote[]
}

export const initialState: CritereEvalNoteState = {
    data: new CritereEvalNote(),
    list: []
} 

export const CritereEvalNoteInterface = createSlice({
    name: 'CritereEvalNote',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<ICritereEvalNote>) => {
            state.data = action.payload
        },
        setCritereEvalNotes: (state, action: PayloadAction<ICritereEvalNote[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setCritereEvalNotes } = CritereEvalNoteInterface.actions

export default CritereEvalNoteInterface.reducer