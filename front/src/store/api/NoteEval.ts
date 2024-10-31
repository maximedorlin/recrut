/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { NoteEval} from "../../interfaces/mainInterfaces";

export const NoteEvalApp = createApi({
	reducerPath: "NoteEvalApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/noteEvals/`,
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
		CreateNoteEval: builder.mutation({
			query: (data: Omit<NoteEval, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateNoteEval: builder.mutation({
			query: (data: NoteEval) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteNoteEval: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),

		getNoteEvals: builder.query<NoteEval[], void>({
			query: () => "/all",
		}),

		getNoteEvalById: builder.query<NoteEval, number>({
			query: (id) => `${id}/`,
		  }),


	}),
});

export const {
	useGetNoteEvalsQuery,
	useCreateNoteEvalMutation,
	useDeleteNoteEvalMutation,
	useUpdateNoteEvalMutation,
	useGetNoteEvalByIdQuery,
} = NoteEvalApp;
