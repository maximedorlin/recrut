/** @format */

export interface Errors {
	non_field_errors: string[];
}

export interface LoginOrPassword {
	errors: Errors;
}

export interface RootLoginError {
	data: Data;
	status: number;
}

export interface Data {
	errors?: Errors | null;
}

export interface LoginSuccess {
	token: Token;
	msg: string;
}

export interface Token {
	refresh: string;
	access: string;
	user: UserInformations;
}

export interface UserInformations {
	id: number;
	email: string;
	username: string;
	password: string;
	phoneNumber: string;
	role: string;
}
