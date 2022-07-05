import styled from "styled-components";

export const FooterDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #666666;
    height: 16vh;
    width: 100%;
    padding: 1.5em;
    hr{
        height: 10vh;
        width: 0.15vw;
        border-width: 0;
        background-color: #7C7C7C;
    }
    h3 {
        font-size: 12px;
        //opacity: 85%;
        color: black;
    }
    nav{
        display: flex;
        font-size: 2.3rem;
        gap: 10px;
        a{
            :hover{
               opacity: 80%;
            }
        }

        svg{
         color:black;

         :hover{
               color: white;
            }
        }
    }
`

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    
    h2{
        text-align: center;
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 20px;
        /* -webkit-text-stroke: 1px #000; */
        
    }
    
    a{
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: bold;
        color: black;
        :hover{
            color: white;
        }
        span{
            font-size: 20px;
        }
    }
`