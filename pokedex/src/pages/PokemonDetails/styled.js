import { Container } from '@chakra-ui/react'
import styled from 'styled-components'
import { colors } from '../../theme/pokemonTypeColors'

export const HeaderDetails = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`
export const PageDetailsContainer = styled.div `
    display: flex;
    flex-direction: column;
    

`

export const ContainerType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: linear-gradient(53deg, rgba(248,246,244,1) 5%, ${props => colors[props.type]} 86%);
    height: 55vh;
    font-size: 1.2rem;
    text-transform: capitalize;
    min-width: 100%;
    gap: 2%;
    box-shadow: 0px 0px 6px;


`

export const ContainerMoves = styled.div `

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: linear-gradient(53deg, rgba(248,246,244,1) 5%, ${props => colors[props.type]} 86%);
    height: 55vh;
    font-size: 1.2rem;
    text-transform: capitalize;
    min-width: 100%;
    gap: 2%;
    box-shadow: 0px 0px 6px;


`