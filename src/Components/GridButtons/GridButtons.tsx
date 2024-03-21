import { FC } from 'react'
import s from './gridButtons.module.css'
import { GridButton } from './GridButton/GridButton'

export const GridButtons: FC = () => {

  return (
    <div className={s.gridButtonsWrap}>
        <GridButton 
          buttonText={'20л'} 
          count={20} 
        />
        <GridButton 
          buttonText={'30л'} 
          count={30} 
         />
        <GridButton 
          buttonText={'40л'} 
          count={40} 
        />
        <GridButton 
          buttonText={'1000 р'} 
          count={1000} 
        />
        <GridButton 
          buttonText={'1500 р'} 
          count={1500} 
        />
        <GridButton 
          buttonText={'2000 р'} 
          count={2000} 
        />
    </div>
  )
}
