import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Task_Item = () => {

    const [data, setData] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        FetchApiData();
    }, []);

    const FetchApiData = async () => {
        const res = await axios.get("http://localhost:5000/api/task/all");
        setData(res.data);
    };

    const handleEditClick = (item) => {
        setSelectedTask(item);
    };

    const handleUpdate = async () => {
        const res = await axios.put(
            `http://localhost:5000/api/task/${selectedTask._id}`,
            selectedTask
        );

        FetchApiData();
        setSelectedTask(null);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/task/${id}`);
        FetchApiData();
    };

    return (
        <>

            {selectedTask && (
                <div>
                    <input
                        value={selectedTask.task}
                        onChange={(e) =>
                            setSelectedTask({
                                ...selectedTask,
                                task: e.target.value
                            })
                        }
                    />

                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}


            {data.map((item) => (
                <div
                    key={item._id}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px"
                    }}
                >
                    <h4>{item.task}</h4>

                    <div>
                        <button onClick={() => handleEditClick(item)}>
                            Update
                        </button>

                        <button onClick={() => handleDelete(item._id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Task_Item;

