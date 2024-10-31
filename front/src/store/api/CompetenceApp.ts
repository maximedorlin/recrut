/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { initialState } from "../slices/AuthSlice";
import { Competence} from "../../interfaces/mainInterfaces";
import { BACKEND_API_URL } from "../../utils/env";

export const CompetenceApp = createApi({
	reducerPath: "CompetenceApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/competences/`,
		// prepareHeaders: (headers) => {
		// 	const user = localStorage.getItem("WD_USER");
		// 	if (user) {
		// 		const userParsed = JSON.parse(user) as initialState;
		// 		// console.log("USER PARSED ", userParsed);
		// 		headers.set("authorization", `Bearer ${userParsed.access}`);
		// 		headers.set("Content-type", "application/json");
		// 		console.log(headers.get("authorization"));
		// 	}
		// 	return headers;
		// },
	}),

	endpoints: (builder) => ({
		CreateCompetence: builder.mutation({
			query: (data: Omit<Competence, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),

		UpdateCompetence: builder.mutation({
			query: (data: Competence) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteCompetence: builder.mutation({
			query: (idCompetence: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),

		getCompetences: builder.query<Competence[], void>({
			query: () => "all",
		}),

		getCompetenceById: builder.query<Competence, number>({
			query: (id) => `${id}/`,
		  }),
	}),
});

export const {
	useGetCompetencesQuery,
	useCreateCompetenceMutation,
	useDeleteCompetenceMutation,
	useUpdateCompetenceMutation,
	useGetCompetenceByIdQuery,
} = CompetenceApp;
