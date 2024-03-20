import { FC } from 'react'
import s from './fillingStationData.module.css'
import { MainButton } from '@vkruglikov/react-telegram-web-app'
import { useNavigate } from 'react-router-dom';

export const FillingStationData: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tgMiniApp/1")
  }

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

        <MainButton 
          text="Заправиться тут" 
          onClick={handleClick}
        />
    </div>
  )
}
