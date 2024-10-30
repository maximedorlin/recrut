import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface IUser {
    idUser: number;
    username: string;
    email: string;
    password: string;
    statut: string;
}

export class User implements IUser {
    public idUser: number;
    public username: string;
    public email: string;
    public password: string;
    public statut: string; 

    constructor() {
        this.idUser = 1;  
        this.username = "";
        this.email = "";
        this.password = ""; 
        this.statut = ""; 
    }
}

export interface UserState {
    data: IUser;
    list: IUser[]
}

export const initialState: UserState = {
    data: new User(),
    list: []
} 

export const UserInterface = createSlice({
    name: 'User',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<IUser>) => {
            state.data = action.payload
        },
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setUsers } = UserInterface.actions

export default UserInterface.reducer