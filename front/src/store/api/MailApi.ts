/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Mail} from "../../interfaces/mainInterfaces";

export const MailApp = createApi({
	reducerPath: "MailApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/mails/`,
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
		CreateMail: builder.mutation({
			query: (data: Omit<Mail, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateMail: builder.mutation({
			query: (data: Mail) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteMail: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),

		getMails: builder.query<Mail[], void>({
			query: () => "all/",
		}),

	}),
});

export const {
	useGetMailsQuery,
	useCreateMailMutation,
	useDeleteMailMutation,
	useUpdateMailMutation,
} = MailApp;
