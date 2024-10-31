/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { DomaineComp} from "../../interfaces/mainInterfaces";

export const DomaineCompApp = createApi({
	reducerPath: "DomaineCompApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/domaineComps/`,
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
		CreateDomaineComp: builder.mutation({
			query: (data: Omit<DomaineComp, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateDomaineComp: builder.mutation({
			query: (data: DomaineComp) => {
				return {
					url: `${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteDomaineComp: builder.mutation({
			query: (id: number) => {
				return {
					url: `${id}/`,
					method: "DELETE",
				};
			},
		}),

		getDomaineComps: builder.query<DomaineComp[], void>({
			query: () => "all",
		}),
	}),
});

export const {
	useGetDomaineCompsQuery,
	useCreateDomaineCompMutation,
	useDeleteDomaineCompMutation,
	useUpdateDomaineCompMutation,
} = DomaineCompApp;
