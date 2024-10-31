/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Evaluation } from "../../interfaces/mainInterfaces";

export const EvaluationApp = createApi({
	reducerPath: "EvaluationApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/evaluations/`,
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
		CreateEvaluation: builder.mutation({
			query: (data: Omit<Evaluation, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateEvaluation: builder.mutation({
			query: (data: Evaluation) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteEvaluation: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),


		getEvaluations: builder.query<Evaluation[], void>({
			query: () => "all",
		}),

	}),
});

export const {
	useGetEvaluationsQuery,
	useCreateEvaluationMutation,
	useDeleteEvaluationMutation,
	useUpdateEvaluationMutation,
} = EvaluationApp;
