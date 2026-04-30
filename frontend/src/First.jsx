
import React, { useState } from 'react'

const First = () => {

    const [data, setData] = useState(0);

    const Increase = () => {

        setData(data + 1);
    }
    const Descrease = () => {

        if (data == 0) {
            alert("0 is not be Descread....");

        }
        else {

            setData(data - 1);
        }

    }

    return (

        <>
            <h1> {data} </h1>

            <button onClick={Increase}> Increment </button>

            <button onClick={Descrease} > Decrement </button>

        </>
    )

}

export default First  