import React from 'react'

const Greeting = ({timeOfDay}) => {

    const message = timeOfDay == "morning" ? "Good Morning" : "Hello"

    return(
        <>
            <h1>{message}</h1>
        </>
    )
}

export default Greeting