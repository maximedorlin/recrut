// import { Candidat, Candidature } from './mainInterfaces';



/** @format */

export interface LoginInformations {
	username: string;
	password: string;
}
export interface Dash {
	Offre: string;
	Evaluation: string;
	User: string;
	Candidature: string;
}

export interface UserSateAndAuthResponse {
	token: Token;
	msg: string;
}

export interface Token {
	refresh: string;
	access: string;
	user: User;
}




//interface Offre
export interface JobOffer {
	id: number;
	titre: string;
	datePost: Date;
	ficheAnnonce: string;
	statut: boolean;
	typeContrat: string;
	dateLimite: Date;
	companyName:string;
}

//interface user
export interface User {
	id: number;
	email: string;
	name: string;
	phoneNumber: string;
	password: string;
	role: string;
}

//interface Candidature
export interface Candidature {
	id: number;
	dateEnvoie: Date;
	score: number;
	jobOffer: unknown[];
	user: unknown[];
	questionResponse: unknown[];
}

//interface Question
export interface Question {
	id: number;
	titre: string;
	choix: string;
	reponseCorrecte: string;
}

//interface Competence
export interface Competence {
	id: number;
	titre: string;
	contenuMail: string;
	domaineComp: unknown[];
}

//interface DomaineComp
export interface DomaineComp {
	id: number;
	nomType: string;
	jobOffer: unknown[];
}

export interface QuestionResponse{
	id : number;
	response : string;
	question : unknown[];
	candidature : unknown[];
}





