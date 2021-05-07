import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteTodo } from '../redux/actions';


function TodoItem({todo}) {

let dispatch = useDispatch()

    return (
        <div className='container-todo'>
            <h4>{todo.id}</h4>
            <h4>{todo.name}</h4>
            <button className='btn-edit'>Edit</button>
            <button className='btn-delete' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    )
}

export default TodoItem
