
import React, { useEffect } from 'react'
import axios from 'axios';


const Second = () => {

    useEffect(() => {
        FetchApiData();

    }, []);


    const FetchApiData = async () => {

        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
         console.log(res.data);
          

    }

    return (

        <>
            <h1> Example of useEffect Hooks </h1>



        </>
    )
}

export default Second