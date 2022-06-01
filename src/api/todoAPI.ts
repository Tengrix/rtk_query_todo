import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {DataTypes, TodoTypes} from '../types/TodoTypes';

export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getTodos: builder.query<DataTypes, void>({
            query: () => `todos?limit=5`,
            providesTags: (result) =>
                result
                    ?
                    [...result.todos.map(({id}) => ({type: 'Todo', id} as const)),
                        {type: 'Todo', id: 'LIST'},
                    ]
                    :
                    [{type: 'Todo', id: 'LIST'}]
        }),
        addTodo: builder.mutation<DataTypes, Partial<TodoTypes>>({
            query(body) {
                return {
                    url: 'todos/add',
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: [{type: 'Todo', id: 'LIST'}]
        }),
        updateTodo: builder.mutation<DataTypes, Partial<TodoTypes>>({
            query(data) {
                const {id, ...body} = data
                return {
                    url: `todos/${id}`,
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: [{type: 'Todo', id: 'LIST'}]
        }),
        delTodo: builder.mutation<DataTypes, number>({
            query(id) {
                return {
                    url: `todos/${id}`,
                    method: 'DELETE'
                }
            }
        })
    }),
})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDelTodoMutation} = todoAPI
