import React, { useState } from 'react';
import CardComponent from './CardComponent';

const TodoApp = () => {
    const [taskList, setTaskList] = useState([]);
    const [inputValue, setInputValue] = useState("")



    function handleFormSubmit(e) {
        e.preventDefault();

        if (inputValue.trim() !== "") {
            const newTask = {
                id: Date.now(),
                task: inputValue.trim(),
                status: "Pending"
            };

            setTaskList((prevTaskList) => [...prevTaskList, newTask]);
            setInputValue("");
        }
    }

    const handleUpdateStatus = (id, currentStatus) => {
        const updateTaskList = taskList.map((task) => {
            if (task.id === id) {
                task.status = currentStatus === "Pending" ? "Completed" : "Pending";
            }

            return task;
        });

        setTaskList(updateTaskList);
    }

    const handleRemoveCard = (id) => {
        const updateTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(updateTaskList);
    }


    return (
        <div className="form-wrapper">
            <h1>My Todos</h1>
            <form action="#" id="input-form" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="todo-name"
                    id="todo-name"
                    placeholder="Enter todo name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required=""
                />
                <button type="submit" id="addBtn" >
                    Add Todo
                </button>
            </form>

            <div className="list-container">
                {
                    taskList.map((task) => (
                        <CardComponent 
                            key={task.id}
                            id={task.id} 
                            task={task.task} 
                            updateStatus={handleUpdateStatus} 
                            removeCard={handleRemoveCard} />
                    ))
                }
            </div>

        </div>
    )
}

export default TodoApp;