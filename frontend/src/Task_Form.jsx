import React, { useState } from 'react';
import axios from 'axios';
import Task_Item from './Task_Item';

const Task_Form = () => {

    const [formdata, setFormData] = useState({
        task: ""
    });

    const handleSubmit = async (e) => {
        debugger;

        e.preventDefault();

        if (!formdata.task.trim()) {
            alert("Task cannot be empty");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/task/add", formdata);

            console.log(res.data);
            alert("Data Added Successfully");

            // setFormData({ task: "" });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formdata.task}
                    onChange={(e) =>
                        setFormData({ ...formdata, task: e.target.value })
                    }
                    placeholder='Enter Task...'
                />

                <button type="submit" onSubmit={handleSubmit}>Add Task</button>

            </form>

            <Task_Item />
        </>
    );
};

export default Task_Form;

