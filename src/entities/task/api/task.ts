import { baseApi } from "@/shared/api/baseApi";
import { Task } from "../model/task";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
    getTask: builder.query<Task, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTasksQuery, useGetTaskQuery } = taskApi;
