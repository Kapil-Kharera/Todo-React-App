import React, { useState } from 'react';



const InputForm = ({addTask}) => {
    const [ userData, setUserData ]  = useState("")

    function handleChange(e) {
        setUserData(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (userData.trim() !== "") {
            addTask(userData);
            setUserData("");
        }
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
                    value={userData}
                    onChange={handleChange}
                    required=""
                />
                <button type="submit" id="addBtn" >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default InputForm;