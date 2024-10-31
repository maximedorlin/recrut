/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Offre} from "../../interfaces/mainInterfaces";

export const OffreApp = createApi({
	reducerPath: "OffreApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/offres/`,
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
		CreateOffre: builder.mutation({
			query: (data: Omit<Offre, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateOffre: builder.mutation({
			query: (data: Offre) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteOffre: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),

		getOffres: builder.query<Offre[], void>({
			query: () => "all",
		}),

	}),
});

export const {
	useGetOffresQuery,
	useCreateOffreMutation,
	useDeleteOffreMutation,
	useUpdateOffreMutation,
} = OffreApp;
