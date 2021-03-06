import {ADD_TODO, EDIT_TODO, DELETE_TODO} from './actions';
import {todos} from './state';

export let reducer = (state = todos, action) => {

let newTodos;

    switch(action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;

        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
            break;

        case EDIT_TODO:
            break;
    }
    return state;
}



