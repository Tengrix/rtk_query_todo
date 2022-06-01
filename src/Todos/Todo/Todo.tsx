import React, {ChangeEvent, useState} from 'react';
import {TodoTypes} from '../../types/TodoTypes';
import s from './Todo.module.css'
import {useDelTodoMutation, useUpdateTodoMutation} from '../../api/todoAPI';

const Todo = (todo: TodoTypes) => {
    const [updateTodo, {}] = useUpdateTodoMutation()
    const [delTodo, {}] = useDelTodoMutation()
    const [edit, setEdit] = useState<boolean>(false)
    const [updatedTodo, setUpdatedTodo] = useState({todo: '', completed: false})

    const editHandler = () => {
        setEdit(!edit)
    }
    const onChangeHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
        setUpdatedTodo(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const onCheckHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
        setUpdatedTodo(prevState => ({
            ...prevState, completed: target.checked
        }))
    }
    const saveHandler = async (id: number) => {
        try {
            updateTodo({...updatedTodo, id}).unwrap()
        } catch (e) {

        } finally {
            setEdit(!edit)
        }
    }
    const cancelHandler = () => {
        setEdit(!edit)
    }
    const delTodoHandler =async (id:number) =>{
        await delTodo(id).unwrap()
    }
    return (
        <tr>
            <td>
                {edit ? <input
                    onChange={onChangeHandler}
                    name={'todo'}
                    className={s.todoInput}
                    type="text"
                    defaultValue={todo.todo}
                /> : todo.todo}
            </td>
            <td>
                {edit ? <input
                        onChange={onCheckHandler}
                        name={'completed'}
                        defaultChecked={todo.completed}
                        type="checkbox"/>
                    :
                    todo.completed ? 'Yes' : 'No'}
            </td>
            <td>{
                !edit ?
                    <div>
                        <button onClick={editHandler}>edit</button>
                        <button onClick={()=>delTodoHandler(todo.id)}>del</button>
                    </div>
                    :
                    <div>
                        <button onClick={() => saveHandler(todo.id)}>save</button>
                        <button onClick={cancelHandler}>cancel</button>
                    </div>
            }

            </td>
        </tr>
    );
};

export default Todo;