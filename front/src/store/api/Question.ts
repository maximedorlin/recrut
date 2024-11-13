/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Question } from "../../interfaces/mainInterfaces";

export const QuestionApp = createApi({
	reducerPath: "QuestionApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/Questions/`,
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
		CreateQuestion: builder.mutation({
			query: (data: Omit<Question, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateQuestion: builder.mutation({
			query: (data: Question) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteQuestion: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),


		getQuestions: builder.query<Question[], void>({
			query: () => "all",
		}),

	}),
});

export const {
	useGetQuestionsQuery,
	useCreateQuestionMutation,
	useDeleteQuestionMutation,
	useUpdateQuestionMutation,
} = QuestionApp;
