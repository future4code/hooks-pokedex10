import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A9A9A9;
    height: 12vh;
    width: 100%;
    /* padding: 0.8em 1.5em; */
`

export const DivLogoHome = styled.div`
    height: 100%;
    width: 52%;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color:#A9A9A9;
`


export const DivDex = styled.div`
    height: 100%;
    width: 48%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 1em;
    gap: 1.3em;
    
`

export const ButtonOne = styled.button`
    height: 110%;
    background-color: #A9A9A9;
    border: none;
    position: relative;
    left: 120px;
    bottom: 5px;

    :hover{
        opacity: 85%;
    }
`
export const ButtonTwo = styled.button`
    height: 90%;
    background-color: #A9A9A9;
    border: none;
    :hover{
        opacity: 85%;
    }
`

export const Img = styled.img`
    height: 100%;
   
`