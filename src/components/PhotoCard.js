import React from 'react';

function PhotoCard(props) {
    
    return (
        <div>
            <h2> { props.title }</h2>
            <h4> { props.date } </h4>
            <img src={ props.url } alt="NASA"/>
            <p>All images provided by NASA</p>
            <p> { props.explanation } </p>
        </div>
    )
}

export default PhotoCard;