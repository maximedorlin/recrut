

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface IDocument {
    idDocument: number;
    titreDoc: string;
    anneeObtention: string;
    etablissementObtention: string;
    type: string;
    docCourant: string;
}

export class Document implements IDocument {
    public idDocument: number;
    public titreDoc: string;
    public anneeObtention: string;
    public etablissementObtention: string;
    public type: string; 
    public docCourant: string;

    constructor() {
        this.idDocument = 1;  
        this.titreDoc = "";
        this.anneeObtention = "";
        this.etablissementObtention = ""; 
        this.type = ""; 
        this.docCourant = ""; 
    }
}

export interface DocumentState {
    data: IDocument;
    list: IDocument[]
}

export const initialState: DocumentState = {
    data: new Document(),
    list: []
} 

export const DocumentInterface = createSlice({
    name: 'Document',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<IDocument>) => {
            state.data = action.payload
        },
        setDocuments: (state, action: PayloadAction<IDocument[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setDocuments } = DocumentInterface.actions

export default DocumentInterface.reducer