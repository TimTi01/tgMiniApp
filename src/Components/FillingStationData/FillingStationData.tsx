import { FC } from 'react'
import s from './fillingStationData.module.css'
import { BackButton } from '@vkruglikov/react-telegram-web-app'
import { useLocation, useNavigate } from 'react-router-dom';

export const FillingStationData: FC = () => {
  const navigate = useNavigate();
  const location = useLocation()

  // const handleClick = () => {
  //   navigate("/tgMiniApp/1")
  // }

  Telegram.WebApp.MainButton.show();
  Telegram.WebApp.MainButton.setParams({
    text: 'Заправиться тут2',
  });
  Telegram.WebApp.MainButton.onClick(function() {
    // Переходим на предыдущую страницу
    navigate("/tgMiniApp/1")
  });

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

        {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
        {/* <NextRouteButton navigateLink="/tgMiniApp/1"/>
        { location.pathname !== "/tgMiniApp/" && <BackRouteButton/> } */}
        {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
        { location.pathname !== "/tgMiniApp/" && <BackButton onClick={() => navigate(-1)}/> }
        { location.pathname !== "/tgMiniApp/" && <BackButton onClick={() => navigate(-1)}/> }

        {/* <MainButton 
          text="Заправиться тут" 
          onClick={handleClick}
        /> */}

        {`viewportHeight: ${Telegram.WebApp.viewportHeight}`}
        {`viewportStableHeight: ${Telegram.WebApp.viewportStableHeight}`}
    </div>
  )
}
