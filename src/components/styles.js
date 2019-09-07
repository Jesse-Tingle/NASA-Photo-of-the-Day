import styled from 'styled-components';

let redColor = '#CC0A2C';
let blueColor = '#0066B4';

export const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const TextContentDiv = styled.div`
    padding-left: 2%;
    width: 35%;
`;

export const StyledDate = styled.h4`
    font-family: Nasalization;
    color: ${blueColor};
`;

export const ImgAndCaptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledImg = styled.img`
    height: 500px;
`;

export const StyledNasa = styled.p`
    font-family: Nasalization;    
    color: ${redColor};
`;

export const StyleTitle = styled.h2`
    font-family: Nasalization;   
    color: ${redColor};
`;