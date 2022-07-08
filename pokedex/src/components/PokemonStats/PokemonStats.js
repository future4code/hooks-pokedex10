import { Progress } from '@chakra-ui/react'
import { StatName, StatsContainer, FieldsetForm } from './styled'

const statsPt = [
   'HP',
   'Ataque',
   'Defesa',
   'Sp. Atk.',
   'Sp. Def.',
   'Velocidade'
]

const PokemonStats = (props) => {

   const stats = props.stats.map((stat, index) => {
      return (
         <div key={index}>
            <p>
               <StatName> {statsPt[index]} : </StatName>
               {stat.base_stat}
            </p>
            <Progress variant={props.type} size='sm' value={stat.base_stat} max='260' />
         </div>
      )
   })

   return (
      <StatsContainer>
         <FieldsetForm>
            <legend> Estatísticas </legend>
            {stats}
         </FieldsetForm>
      </StatsContainer>
   )
}

export default PokemonStats