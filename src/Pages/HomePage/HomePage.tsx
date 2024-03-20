import { FC } from "react"
import { MyMap } from "../../Components/MyMap"
import { useGeoLocation } from "../../hooks/hooks";
import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { Outlet, useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
    const geo = useGeoLocation(); 
    let myGeo = [geo.coordinates?.lat, geo.coordinates?.lng]
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/tgMiniApp/1")
    }

    return (
        <>
            <MyMap 
                geo={geo} 
                myGeo={myGeo} 
                pointCoords={[59.940375, 30.313816]}
            />
            <Outlet />

            <MainButton 
                text="Заправиться тут" 
                onClick={handleClick}
            />
        </>
    )
}
