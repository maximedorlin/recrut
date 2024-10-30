
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPostuler {
    idPostuler: number;
    dateEnregistrement: Date;
    statutActuel: string;
}

export class Postuler implements IPostuler {
    public idPostuler: number;
    public dateEnregistrement: Date;
    public statutActuel: string;

    constructor() {
        this.idPostuler = 1;  
        this.dateEnregistrement = new Date;
        this.statutActuel = ""; 
    }
}

export interface PostulerState {
    data: IPostuler;
    list: IPostuler[]
}

export const initialState: PostulerState = {
    data: new Postuler(),
    list: []
} 

export const PostulerInterface = createSlice({
    name: 'Postuler',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<IPostuler>) => {
            state.data = action.payload
        },
        setPostulers: (state, action: PayloadAction<IPostuler[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setPostulers } = PostulerInterface.actions

export default PostulerInterface.reducer