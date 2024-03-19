import { FC } from 'react'
import s from './range.module.css'

export const Range: FC = () => {
  return (
    <div className={s.rangeWrap}>
        <input 
            className={s.range} 
            type="range" 
            // value="0"
            min="0"
            max="100"
        />
    </div>
  )
}
