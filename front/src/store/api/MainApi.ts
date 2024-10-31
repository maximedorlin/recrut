// /** @format */

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../../env";

// import { initialState } from "../slices/AuthSlice";
// import { MailInterface } from "../../interface/mailInterfaces";


// // import { store } from "../store";

// export const MainApi = createApi({
// 	reducerPath: "MainApi",
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: `${BACKEND_API_URL}mails`,
// 		// prepareHeaders: (headers) => {
// 		// 	const user = localStorage.getItem("WD_USER");
// 		// 	if (user) {
// 		// 		const userParsed = JSON.parse(user) as initialState;
// 		// 		// console.log("USER PARSED ", userParsed);
// 		// 		headers.set("authorization", `Bearer ${userParsed.access}`);
// 		// 		headers.set("Content-type", "application/json");
// 		// 		console.log(headers.get("authorization"));
// 		// 	}
// 		// 	return headers;
// 		// },
// 	}),

// 	endpoints: (builder) => ({
// 		// CreateClient: builder.mutation({
// 		// 	query: (data: Omit<Client, "id">) => {
// 		// 		return {
// 		// 			url: "clients/",
// 		// 			method: "POST",
// 		// 			body: data,
// 		// 		};
// 		// 	},
// 		// }),
		
		
		
// 		getMail: builder.query<MailInterface[], void>({
// 			query: () => "clients/",
// 		}),
		
// 	}),
// });

// export const {
	
// } = MainApi;
