/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Sondage} from "../../interfaces/mainInterfaces";

export const SondageApp = createApi({
	reducerPath: "SondageApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/sondages`,
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
		CreateSondage: builder.mutation({
			query: (data: Omit<Sondage, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),

		UpdateSondage: builder.mutation({
			query: (data: Sondage) => {
				return {
					url: `/${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteSondage: builder.mutation({
			query: (id: number) => {
				return {
					url: `/${id}/`,
					method: "DELETE",
				};
			},
		}),

		getSondages: builder.query<Sondage[], void>({
			query: () => "/all",
		}),

	}),
});

export const {
	useGetSondagesQuery,
	useCreateSondageMutation,
	useDeleteSondageMutation,
	useUpdateSondageMutation,
} = SondageApp;
