import React, {ChangeEvent, useState} from 'react';
import {useAddTodoMutation} from '../../api/todoAPI';
import MyModal from '../../utils/MyModal';
import s from '../../utils/MyModal.module.css';

const NewTodo = () => {
    const [addTodo, {isLoading, isError, error}] = useAddTodoMutation()
    const [modal, setModal] = useState<boolean>(false)
    const [todo, setTodo] = useState({todo:'',completed:false, userId: 5})
    const modalHandler = () => {
        setModal(!modal)
    }
    const onChangeHandler = ({target}:ChangeEvent<HTMLInputElement>) => {
        setTodo(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const onCheckHandler = ({target}:ChangeEvent<HTMLInputElement>) =>{
        setTodo(prevState => ({
            ...prevState, completed: target.checked
        }))
    }

    const handleAddTodo = async () => {
        try {
            await addTodo(todo).unwrap()
        }catch (e){

        }finally {
            setModal(false)
        }
    }

    return (
        <div>
            <button onClick={modalHandler}>create new todo</button>
            {modal &&
            <div>
                {/*<MyModal/>*/}
                <div className={s.modal}>
                    <div className={s.modalContent}>
                        <div className={s.modalHeader}>

                        </div>
                        <div className={s.modalBody}>
                            <label htmlFor="todo">New Todo</label>
                            <input type="text" name={'todo'} value={todo.todo} onChange={onChangeHandler}/>
                            <label htmlFor="completed">Completed</label>
                            <input type="checkbox" name={'completed'} defaultChecked={todo.completed} onChange={onCheckHandler}/>
                            <button onClick={handleAddTodo}>Add</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
            }
        </div>
    );
};

export default NewTodo;