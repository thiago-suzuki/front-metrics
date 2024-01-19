import styled from "styled-components";

export const Container = styled.div`
   width: 100%; 
   height: 100%; 
   position: relative; 
   background: white;
`;

export const Title = styled.div`
    opacity: 0.80; 
    color: black; 
    font-size: 48px; 
    font-family: 'Inter', 'sans-serif'; 
    font-weight: 500; 
    text-align: center;
    word-wrap: break-word;
    display: flex;
    justify-content: center;
    text-indent: 7px;
`;

export const TitleGraphic = styled.div`
    opacity: 0.80; 
    color: black; 
    font-size: 24px; 
    font-family: 'Inter', 'sans-serif'; 
    font-weight: 500; 
    text-align: center;
    word-wrap: break-word;
    display: flex;
    justify-content: center;
    text-indent: 7px;
`;

export const Button = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%; 
    height: 65px; 
    background: green; 
    border-radius: 4px;
    color: white;
    font-size: 32px;
`;