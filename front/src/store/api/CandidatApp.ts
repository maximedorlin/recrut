/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Candidat} from "../../interfaces/mainInterfaces";

export const CandidatApp = createApi({
	reducerPath: "CandidatApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/candidats`,
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
		CreateCandidat: builder.mutation({
			query: (data: Omit<Candidat, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateCandidat: builder.mutation({
			query: (data: Candidat) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteCandidat: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),

		getCandidats: builder.query<Candidat[], void>({
			query: () => "/all",
		}),
	}),
});

export const {
	useGetCandidatsQuery,
	useCreateCandidatMutation,
	useDeleteCandidatMutation,	
	useUpdateCandidatMutation,
} = CandidatApp;
