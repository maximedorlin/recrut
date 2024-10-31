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
	Sondage: string;
	Mail: string;
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
export interface Offre {
	id: number;
	titreOffre: string;
	datePost: Date;
	fichierAnnonce: string;
	statut: boolean;
	typeContrat: string;
	dateLimite: Date;
	// domaineComps: unknown[];
	// candidatures: unknown[];
}

//interface user
export interface User {
	id: number;
	email: string;
	username: string;
	password: string;
	role: unknown[];
}

//interface mail
export interface Mail {
	id: number;
	typeMail: string;
	descriptionMail: string;
	contenuMail: string;
	Candidat: unknown[];
}

//interface sondage
export interface Sondage {
	id: number;
	titre: string;
	quetion: string;
	reponceVrai:boolean;
	reponce: string;
}

//interface Postulant
export interface Candidat {
	id: number;
	niveauEtude: number;
	anneeExperience: number;
	dernierEtablissement: string;
	dispoDu: Date;
	dispoAu: Date;
	modalite: string;
	permisConduire: boolean;
	situationCand: string;
	motivation: string;
// 	postulerList: unknown[];
// 	evaluationList: unknown[];
// 	mailList: unknown[];
}

//interface Candidature
export interface Candidature {
	id: number;
	dateEnregistrement: Date;
	statutActuel: unknown[];
	Candidat: unknown[];
	Offre: unknown[];
}

//interface Evaluation
export interface Evaluation {
	id: number;
	titre: string;
	epreuve: string;
	dateEvaluation: Date;
	decisionEvaluation: string;
	// noteEvals : undefined[];
}

//interface Competence
export interface Competence {
	id: number;
	titre: string;
	contenuMail: string;
	DomaineComp: unknown[];
}

//interface DomaineComp
export interface DomaineComp {
	id: number;
	nomType: string;
	offre: unknown[];
}

//interface Document
export interface Document {
	id: number;
	anneeObtention:number;
	titreDoc:string;
	etablissementObtention:string;
	mention:number;
	docCourant:boolean;
	Candidature: unknown[];
}

//interface NoteEval
export interface NoteEval {
	id: number;
	note: number;
	dateEvaluation: Date;
	commentaire: string;
	evaluation: unknown[];
	candidature :unknown[];
}

