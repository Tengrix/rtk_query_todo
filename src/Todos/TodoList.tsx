import React, {ChangeEvent, useState} from 'react';
import {useGetTodosQuery} from '../api/todoAPI';
import Todo from './Todo/Todo'
import s from './TodoList.module.css'
import NewTodo from './Todo/NewTodo';

const TodoList = () => {
    const {isLoading, data, isError} = useGetTodosQuery()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const onChangeHandler = ({target}:ChangeEvent<HTMLInputElement>) =>{
        setSearchQuery(target.value)
    }
    const searchHandler = (title:string) => {
        return data && data.todos.filter(todo=> todo.todo.toLowerCase().includes(title.toLowerCase()))
    }
    const search = searchHandler(searchQuery)
    return (
        <div>
            <NewTodo/>
            <input type="text" onChange={onChangeHandler}/>
            <div className={s.listBlock}>
                {isError && 'ERROR'}
                {isLoading ?
                    <h1>LOADING</h1> :
                    <table>
                        <tbody>
                        <tr>
                            <th>Todos</th>
                            <th>Completed</th>
                            <th></th>
                        </tr>
                        {!!search && search.map(todo =>
                            <Todo key={todo.id} {...todo}/>
                        )}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default TodoList;