import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Second = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        FetchApiData();
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setFilteredItems(data);
        } else {
            const filtered = data.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    }, [query, data]);

    const FetchApiData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setData(res.data);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search Here...."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <h1>Search Results</h1>

            {filteredItems.map((item) => (
                <div key={item.id}>
                    <h4>postId: {item.postId}</h4>
                    <h5>id: {item.id}</h5>
                    <h5>name: {item.name}</h5>
                    <h5>email: {item.email}</h5>
                    <h5>body: {item.body}</h5>
                </div>
            ))}
        </>
    );
};

export default Second;