import React, {useState} from 'react'
import TodoListItem from './TodoListItem'

const NewTodoForm = () => {
    const [inputVal, setInputVal] = useState('');

    return (
        <div className="newTodoForm">
            <input 
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder="Type Todo Task here">
            </input>
            <button>Save</button>
        </div>
    );
}



export default NewTodoForm;