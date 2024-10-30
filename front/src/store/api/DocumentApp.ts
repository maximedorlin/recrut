/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Document} from "../../interfaces/mainInterfaces";

export const DocumentApp = createApi({
	reducerPath: "DocumentApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/documents/`,
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
		CreateDocument: builder.mutation({
			query: (data: Omit<Document, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateDocument: builder.mutation({
			query: (data: Document) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteDocument: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),

		getDocuments: builder.query<Document[], void>({
			query: () => "all",
		}),

		getDocumentById: builder.query<Document, number>({
            query: (id) => `${id}/`,
        }),

	}),
});

export const {

	useGetDocumentsQuery,
	useCreateDocumentMutation,
	useDeleteDocumentMutation,
	useUpdateDocumentMutation,
	useGetDocumentByIdQuery,
} = DocumentApp;
