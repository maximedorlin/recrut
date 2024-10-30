/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { User} from "../../interfaces/mainInterfaces";

export const UserApp = createApi({
	reducerPath: "UserApp",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/Users`,
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
		CreateUser: builder.mutation({
			query: (data: Omit<User, "id">) => {
				return {
					url: "",
					method: "POST",
					body: data,
				};
			},
		}),
        
		UpdateUser: builder.mutation({
			query: (data: User) => {
				return {
					url: `/${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),

		DeleteUser: builder.mutation({
			query: (id: number) => {
				return {
					url: `/${id}/`,
					method: "DELETE",
				};
			},
		}),

		getUsers: builder.query<User[], void>({
			query: () => "all/",
		}),
	}),
});

export const {
	useGetUsersQuery,
	useCreateUserMutation,
	useDeleteUserMutation,
	useUpdateUserMutation,
} = UserApp;
