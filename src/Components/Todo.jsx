import React from 'react';
import '../App.css';
import Modal from './Modal-Editor';

const Todo = () => {
    const [todos, setTodos] = React.useState(['Babysitting']);
    const [isVisible, setIsVisible] = React.useState(false);
    const [input, setInput] = React.useState('');

    const [currentTodoIndex, setCurrentTodoIndex] = React.useState(null);
    const [newTodo, setNewTodo] = React.useState(todos[currentTodoIndex]);

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect (() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
    }, []);
    

    const handleSubmit = () => {
        handleEditTodo(newTodo);
        closeModal(); // Close the modal after submitting
    };

    const handleEditTodo = (newTodo) => {
        const updatedTodos = todos.map((todo, index) =>
          index === currentTodoIndex ? newTodo : todo
        );
        setTodos(updatedTodos);
    };

    const openModal = (index) => {
        setCurrentTodoIndex(index);
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false)
    };

    const addToDo = () => {
        setTodos((t) => [...t, input]);
    };

    const deleteToDo = (text) => {
        const updateTodos = todos.filter(t => t !== text);
        setTodos(updateTodos);
    };

    // deleteToDo(todo)

    return (
        <div>
            <p id='demo'>{windowWidth}</p>
            <div className='mainDiv col-9 col-m-10'>
            <div className='h1-todo'>TODO LIST</div>
            <hr style={{ marginBottom: '20px', width: '300px' }} />
            <div className='input-btn'>
                <input 
                type="text"
                name="input1" 
                id="addText" 
                placeholder='Add Text...' 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button className='add-toDo' type="button" onClick={addToDo}>ADD</button>
            </div>
            <hr style={{ marginBottom: '20px', width: '300px' }} />

            {todos.map((todo, index) => {
                return (
                    <div key={index} className='todo-tasks'>
                        <div className='specific-task'>{todo}</div>
                        <div className='edit-delete-btns'>
                            <button className='edit-del' type="button" onClick={() => deleteToDo(todo)}>Delete</button>
                            <button className='edit-del' type="button" onClick={() => openModal(index)}>Edit</button>
                        </div>
                    </div>
                )
            })}

            {/* 
            <IsVisible visibility = {isVisible} initValue = {input} >
                <div className="result">{input}</div>
            </IsVisible>
            */}
            </div>
            <div>
                <Modal isOpen = {isVisible}>
                    <div className='modal-mainDiv'>
                        <div className='modal'>
                            <p className='edit-toDo'>Edit the todo: </p>
                            <input 
                            type="text" 
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            name="input2" 
                            id="editText" 
                            placeholder='Edit todo...'
                            />
                        </div>
                        <div className='modal-btns'>
                            <button id='cancel-btn' className="ok-cancel-btn" type="button" onClick={closeModal}>Cancel</button>
                            <button id='ok-btn' className="ok-cancel-btn" type="button" onClick={handleSubmit}>OK</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
        
    );
};

export default Todo;