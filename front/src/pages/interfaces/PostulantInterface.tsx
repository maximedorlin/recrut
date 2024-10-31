
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface IPostulant {
    idCand: number;
    niveauEtude: string;
    anneeExperience: number;
    dernierEtablissement: string;
    dispoDu: Date;
    dispoAu: Date;
    modalite: string;
    permisConduire:String;
    situationCand:String;
    motivation:String;
}

export class Postulant implements IPostulant {
    public idCand: number;
    public niveauEtude: string;
    public anneeExperience: number;
    public dernierEtablissement: string;
    public dispoDu: Date;
    public dispoAu: Date;
    public modalite: string;
    public permisConduire:String;
    public situationCand:String;
    public motivation:String;

    constructor() {
        this.idCand= 1;
        this.niveauEtude = " ";
        this.anneeExperience = 1;
        this.dernierEtablissement = " ";
        this.dispoDu = new Date;
        this.dispoAu = new Date;
        this.modalite = " ";
        this.permisConduire = " ";
        this.situationCand = " ";
        this.motivation = " ";
    }
}

export interface PostulantState {
    data: IPostulant;
    list: IPostulant[]
}

export const initialState: PostulantState = {
    data: new Postulant(),
    list: []
} 

export const PostulantInterface = createSlice({
    name: 'Postulant',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<IPostulant>) => {
            state.data = action.payload
        },
        setPostulants: (state, action: PayloadAction<IPostulant[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setPostulants } = PostulantInterface.actions

export default PostulantInterface.reducer