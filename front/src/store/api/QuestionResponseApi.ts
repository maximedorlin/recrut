/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { QuestionResponse } from "../../interfaces/mainInterfaces";

export const QuestionResponseApp = createApi({
	reducerPath: "QuestionResponseApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/QuestionResponse/`,
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
		CreateQuestionResponse: builder.mutation({
			query: (data: Omit<QuestionResponse, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateQuestionResponse: builder.mutation({
			query: (data: QuestionResponse) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteQuestionResponse: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),


		getQuestionResponseResponse: builder.query<QuestionResponse[], void>({
			query: () => "all",
		}),

	}),
});

export const {
	useGetQuestionResponseResponseQuery,
	useCreateQuestionResponseMutation,
	useDeleteQuestionResponseMutation,
	useUpdateQuestionResponseMutation,
} = QuestionResponseApp;
