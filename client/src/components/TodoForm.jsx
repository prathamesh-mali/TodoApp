
import { useState } from 'react';

import { addNewTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';


const TodoForm = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input placeholder="Enter new Todo"
                className="input" onChange={onInputChange} value={text}>
            </input>
        </form>
    )
}

export default TodoForm;