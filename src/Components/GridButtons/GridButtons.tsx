import { FC } from 'react'
import s from './gridButtons.module.css'
import { GridButton } from './GridButton/GridButton'

export const GridButtons: FC = () => {
  return (
    <div className={s.gridButtonsWrap}>
        <GridButton buttonText={'20л'}/>
        <GridButton buttonText={'30л'}/>
        <GridButton buttonText={'40л'}/>
        <GridButton buttonText={'1000 р'}/>
        <GridButton buttonText={'1500 р'}/>
        <GridButton buttonText={'2000 р'}/>
    </div>
  )
}
