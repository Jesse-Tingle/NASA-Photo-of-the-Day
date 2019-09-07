import React from 'react';
import "../App.css";
import { StyleTitle, ContainerDiv, StyledImg, TextContentDiv, ImgAndCaptionDiv, StyledDate, StyledNasa } from './styles.js';

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
                
                <div className="caption">
                    <p>All images provided by</p>
                    <StyledNasa>NASA</StyledNasa>
                </div>
            </ImgAndCaptionDiv>

            <TextContentDiv>
                <StyleTitle> { props.title } </StyleTitle>
                <StyledDate> { props.date } </StyledDate>
                <p> { props.explanation } </p>
            </TextContentDiv>

        </ContainerDiv>
    )
}

export default PhotoCard;