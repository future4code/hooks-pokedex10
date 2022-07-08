import styled from 'styled-components'
import { colors } from '../../theme/pokemonTypeColors'

export const MovesContainer = styled.div`
  color :#423D3D;
  width: 30%;
  height: 100%;
`

export const FieldsetForm = styled.fieldset`
  border: 2px solid #423D3D;
  font-size: 1.1rem;
  padding: 0 0.3rem 0.625rem 5%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  legend{
    font-size: 1.5rem;
    padding: 0.3rem;
  }
`

export const ScrollContainer = styled.div`
  display: flex;
  overflow: auto;
  flex: none;
  flex-flow: row nowrap;
  flex-wrap: wrap;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  justify-content: center;
  align-items: center;
  
  ::-webkit-scrollbar {
    width: 0.25rem;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => colors[props.type]};
    opacity: 40%;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  div {
    display: grid;
    grid-template-columns: repeat(2,50%);
    grid-template-rows: auto;
    gap: 0.625rem;
  }
`