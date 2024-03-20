import { FC } from 'react'
import s from './fillingStationData.module.css'
import { BackButton, MainButton } from '@vkruglikov/react-telegram-web-app'
import { useLocation, useNavigate } from 'react-router-dom';
import { BackRouteButton } from '../TestRouteButton/TestRouteButton';

export const FillingStationData: FC = () => {
  Telegram.WebApp.MainButton.show();

  
  const navigate = useNavigate();
  const location = useLocation()
  
  // Telegram.WebApp.BackButton.onClick(function() {
  //   // Переходим на предыдущую страницу
  //   history.back();
  // });

  const handleClick = () => {
    navigate("/tgMiniApp/2")
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

        {/* BackRouteButton - тестовая кнопка */}
        { location.pathname !== "/tgMiniApp/" && <BackRouteButton/> }
        { location.pathname !== "/tgMiniApp/" && <BackButton onClick={() => navigate(-1)}/> }

        <MainButton 
          text="Заправиться тут" 
          onClick={handleClick}
        />
    </div>
  )
}
