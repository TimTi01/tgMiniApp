import { Placemark, YMaps } from '@pbe/react-yandex-maps';
import {Map} from '@pbe/react-yandex-maps';
import { FC } from 'react';
import { Location } from '../hooks/hooks';

type Coordinates = (string | number | undefined)[]

interface MyMapProps {
    geo: Location,
    myGeo: Coordinates,
    pointCoords: Coordinates,
}

export const MyMap: FC<MyMapProps> = (props) => {
    const {myGeo, geo, pointCoords} = props;

    return (
        <YMaps>
            <Map 
                defaultState={{
                    // @ts-ignore
                    center: [myGeo[0], myGeo[1]],
                    zoom: 9,
                    // controls: ["fullscreenControl"]
                }}
                options={{
                    suppressMapOpenBlock: true
                }}
                // height={160}
                width={'100%'}
                // modules={["control.FullscreenControl"]}
            >
                <Placemark 
                    defaultGeometry={[55.75, 37.57]}
                    geometry={[geo.coordinates?.lat, geo.coordinates?.lng]}
                    properties={{
                    balloonContentBody:
                        "This is balloon loaded by the Yandex.Maps API module system",
                    }} 
                />
                <Placemark 
                    geometry={pointCoords} // координаты "Дворцовая площадь, 2", добавил ради теста
                /> 
            </Map>
        </YMaps>
    );
}
