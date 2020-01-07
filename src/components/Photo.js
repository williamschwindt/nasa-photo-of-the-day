import React from 'react'

function Photo(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.scr} alt="img of the day" />
            <p>{props.description}</p>
        </div>
    )
}

export default Photo;