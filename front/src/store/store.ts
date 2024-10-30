
/** @format */

import ThemeSlice from "./slices/ThemeSlice";
import AuthSlice from "./slices/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import { NoteEvalApp } from './api/NoteEval';
import { CandidatureApp } from './api/CandidatureApp';
import { DomaineCompApp } from './api/DomaineComp';
import { CompetenceApp } from './api/CompetenceApp';
import { DocumentApp } from './api/DocumentApp';
import { OffreApp } from './api/OffreApp';
import { EvaluationApp } from './api/EvaluationApp';
import { UserApp } from './api/UserApp';
import { AuthenticationApi } from "./api/AuthenticationApi";
import { MailApp } from "./api/MailApi";
import { SondageApp } from "./api/SondageApp";
import { CandidatApp } from "./api/CandidatApp";

// import { ArticleApi } from "./api/ArticleApi";

export const store = configureStore({
	reducer: {
		ThemeSlice,
		AuthSlice,
		[AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
		[MailApp.reducerPath]: MailApp.reducer,
		[SondageApp.reducerPath]: SondageApp.reducer,
		[UserApp.reducerPath]: UserApp.reducer,
		[EvaluationApp.reducerPath]: EvaluationApp.reducer,
		[OffreApp.reducerPath]: OffreApp.reducer,
		[DocumentApp.reducerPath]: DocumentApp.reducer,
		[CompetenceApp.reducerPath]: CompetenceApp.reducer,
		[DomaineCompApp.reducerPath]: DomaineCompApp.reducer,
		[CandidatureApp.reducerPath]: CandidatureApp.reducer,
		[CandidatApp.reducerPath]: CandidatApp.reducer,
		[NoteEvalApp.reducerPath]: NoteEvalApp.reducer
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			AuthenticationApi.middleware,
			MailApp.middleware,
			UserApp.middleware,
			SondageApp.middleware,
			EvaluationApp.middleware,
			OffreApp.middleware,
			DocumentApp.middleware,
			CompetenceApp.middleware,
			DomaineCompApp.middleware,
			CandidatureApp.middleware,
			CandidatApp.middleware,
			NoteEvalApp.middleware
		),
}
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
