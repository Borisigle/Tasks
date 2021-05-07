import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {v1 as uuid} from 'uuid';
import {addTodo} from '../redux/actions';

function TodoInput() {

const [name, setName] = useState('');

let dispatch = useDispatch();

    return (
        <div>
            <div>
                <input type='text' value={name} onChange={e => setName(e.target.value)}/>
                <button onClick={() => {
                    dispatch(addTodo(
                    {
                        id: uuid(),
                        name: name
                    }
                ))
                setName('');
                }}>Add</button>
            </div>
        </div>
    )
}

export default TodoInput
