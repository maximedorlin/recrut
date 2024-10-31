
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface IMail {
    idMail: number;
    typeMail: string;
    descriptionMail: string;
    contenuMail: string;
}

export class Mail implements IMail {
    public idMail: number;
    public typeMail: string;
    public descriptionMail: string;
    public contenuMail: string;

    constructor() {
        this.idMail = 1;  
        this.typeMail = "";
        this.descriptionMail = "";
        this.contenuMail = ""; 
    }
}

export interface MailState {
    data: IMail;
    list: IMail[]
}

export const initialState: MailState = {
    data: new Mail(),
    list: []
} 

export const UserInterface = createSlice({
    name: 'Mail',
    initialState,
    reducers: { 
        setData: (state, action: PayloadAction<IMail>) => {
            state.data = action.payload
        },
        setMails: (state, action: PayloadAction<IMail[]>) => {
            state.list = action.payload
        },
    }
})

export const { setData, setMails } = UserInterface.actions

export default UserInterface.reducer