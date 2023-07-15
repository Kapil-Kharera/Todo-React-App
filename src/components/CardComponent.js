import React, { useState } from "react";

const CardComponent = ({task, id, updateStatus, removeCard}) => {
    const [taskStatus, setTaskStatus] = useState("Pending");

    const handleUpdateStatus = () => {
        if (taskStatus === "Pending") {
            setTaskStatus("Completed");
        }else {
            setTaskStatus("Pending");
        }

        updateStatus(id);
    }

    const handleRemoveCard = () => {
        removeCard(id);
    }

  

    return (
        <>
            <div className="card">
                <p className="todo-title">{task}</p>
                <p className="todo-status">Status: <span>{taskStatus}</span></p>
                <button id="btn-1" onClick={handleUpdateStatus}>Update Status</button>
                <button id="btn-2" onClick={handleRemoveCard}>Remove</button>
            </div>
        </>
    )
}

export default CardComponent;