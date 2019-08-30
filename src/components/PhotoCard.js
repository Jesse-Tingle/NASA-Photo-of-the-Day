import React from 'react';
import { StyleTitle, ContainerDiv, StyledImg } from './styles.js';

// const StyleTitle = styled.h2`
//     color: blue;
// `;

function PhotoCard(props) {
    
    return (
        <ContainerDiv>

            <div>
                <StyledImg src={ props.url } alt="NASA"/>
                <p>All images provided by NASA</p>
            </div>

            <div>
                <StyleTitle> { props.title } </StyleTitle>
                <h4> { props.date } </h4>
                <p> { props.explanation } </p>
            </div>

        </ContainerDiv>
    )
}

export default PhotoCard;