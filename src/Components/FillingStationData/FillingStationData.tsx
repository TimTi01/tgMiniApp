import { FC } from 'react'
import s from './fillingStationData.module.css'

export const FillingStationData: FC = () => {

  return (
    <div className={s.wrap}>
        <div className={s.stationNumber}>
          АЗС №234
        </div>
        <div className={s.stationAddress}>
          Санкт-Петербург, Дунайский проспект просвещения, д. 5, к. 124
        </div>
        <div className={s.distance}>
          ~0,1км
        </div>
    </div>
  )
}
