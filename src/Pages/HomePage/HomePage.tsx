import { FC, useState } from "react"
import { MyMap } from "../../Components/MyMap"
import { useGeoLocation } from "../../hooks/hooks";
import { BackButton } from "@vkruglikov/react-telegram-web-app";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
    const geo = useGeoLocation(); 
    let myGeo = [geo.coordinates?.lat, geo.coordinates?.lng]
    const navigate = useNavigate()
    const location = useLocation()
    const [state, setState] = useState(0)

    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setParams({
      text: 'Заправиться тут',
    });
    Telegram.WebApp.MainButton.onClick(function() {
      setState(state + 1)
      navigate("/tgMiniApp/1")
    });

    console.log(Telegram.WebApp.viewportHeight)

    return (
        <>
            <MyMap 
                geo={geo} 
                myGeo={myGeo} 
                pointCoords={[59.940375, 30.313816]}
            />
            <Outlet />

            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
            {/* <NextRouteButton navigateLink="/tgMiniApp/1"/>
            { location.pathname !== "/tgMiniApp/" && <BackRouteButton/> } */}
            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
            { location.pathname !== "/tgMiniApp/" && <BackButton onClick={() => navigate(-1)}/> }

            {/* <div>{location.pathname}</div>
            <div>{state}</div> */}

            {`viewportHeight: ${Telegram.WebApp.viewportHeight}`}
            {`viewportStableHeight: ${Telegram.WebApp.viewportStableHeight}`}
        </>
    )
}
