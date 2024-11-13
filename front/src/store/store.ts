
/** @format */

import ThemeSlice from "./slices/ThemeSlice";
import AuthSlice from "./slices/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import { QuestionResponseApp } from './api/QuestionResponseApi';
import { CandidatureApp } from './api/CandidatureApp';
import { DomaineCompApp } from './api/DomaineComp';
import { CompetenceApp } from './api/CompetenceApp';
import { OffreApp } from './api/OffreApp';
import { QuestionApp } from './api/QuestionApp';
import { UserApp } from './api/UserApp';
import { AuthenticationApi } from "./api/AuthenticationApi";

// import { ArticleApi } from "./api/ArticleApi";

export const store = configureStore({
	reducer: {
		ThemeSlice,
		AuthSlice,
		[AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
		[UserApp.reducerPath]: UserApp.reducer,
		[QuestionApp.reducerPath]: QuestionApp.reducer,
		[OffreApp.reducerPath]: OffreApp.reducer,
		[CompetenceApp.reducerPath]: CompetenceApp.reducer,
		[DomaineCompApp.reducerPath]: DomaineCompApp.reducer,
		[CandidatureApp.reducerPath]: CandidatureApp.reducer,
		[QuestionResponseApp.reducerPath]: QuestionResponseApp.reducer
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			AuthenticationApi.middleware,
			UserApp.middleware,
			QuestionApp.middleware,
			OffreApp.middleware,
			CompetenceApp.middleware,
			DomaineCompApp.middleware,
			CandidatureApp.middleware,
			QuestionResponseApp.middleware
		),
}
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
