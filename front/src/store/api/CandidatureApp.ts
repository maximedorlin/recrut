/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Candidature} from "../../interfaces/mainInterfaces";

export const CandidatureApp = createApi({
	reducerPath: "CandidatureApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/candidatures/`,
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
		CreateCandidature: builder.mutation({
			query: (data: Omit<Candidature, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateCandidature: builder.mutation({
			query: (data: Candidature) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteCandidature: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),

		getCandidatures: builder.query<Candidature[], void>({
			query: () => "all",
		}),

	}),
});

export const {
	useGetCandidaturesQuery,
	useCreateCandidatureMutation,
	useDeleteCandidatureMutation,
	useUpdateCandidatureMutation,
} = CandidatureApp;
