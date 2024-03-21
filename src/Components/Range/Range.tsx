import { FC } from 'react'
import s from './range.module.css'
import { useStore } from '../../store/store'

export const Range: FC = () => {
  const seLitrs = useStore((state) => state.setLitrs)
  // const setRub = useStore((state) => state.setRub)
  const setPrice = useStore((state) => state.setPrice)
  const litrs = useStore((state) => state.litrs)
  const rub = useStore((state) => state.rub)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seLitrs(Number(e.target.value))
    // setRub(Number(e.target.value) * 50)
    setPrice(Number(e.target.value) * rub)
  }

  return (
    <div className={s.rangeWrap}>
        <input 
            className={s.range} 
            type="range" 
            value={litrs}
            min="20"
            max="40"
            onChange={(e) => handleOnChange(e)}
        />
    </div>
  )
}
