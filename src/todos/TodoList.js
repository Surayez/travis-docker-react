import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm  from './NewTodoForm'

const TodoList = ({ todoObjects = [{text:'Hello'}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todoObjects.map( todoObject => <TodoListItem todo={todoObject}/>)}
    </div> 
);

export default TodoList