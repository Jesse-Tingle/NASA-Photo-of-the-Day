import React from 'react';
import { StyleTitle, ContainerDiv, StyledImg, TextContentDiv, ImgAndCaptionDiv } from './styles.js';

// const StyleTitle = styled.h2`
//     color: blue;
// `;

function PhotoCard(props) {
    
    return (
        <ContainerDiv>

            <ImgAndCaptionDiv>
                {props.type === 'image' ?
                    (<StyledImg src={ props.url } alt="NASA" />)
                :
                    (<iframe src={ props.url } alt="NASA" title={props.title}/>)
                }
                
                <p>All images provided by NASA</p>
            </ImgAndCaptionDiv>

            <TextContentDiv>
                <StyleTitle> { props.title } </StyleTitle>
                <h4> { props.date } </h4>
                <p> { props.explanation } </p>
            </TextContentDiv>

        </ContainerDiv>
    )
}

export default PhotoCard;