import React from 'react';
import './App.css';
import Counter from './Counter/Counter';
import TodoList from './Todos/TodoList';

function App() {
    return (
        <div className="App">
            <div className={'Counter'}>
                <h1>Counter(RTK QUERY)</h1>
                <Counter/>
            </div>
            <hr/>
            <div className={'Todos'}>
                <h1>Todos(RTK QUERY)</h1>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
