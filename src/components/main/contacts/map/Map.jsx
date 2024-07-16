import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';

const MyMap = () => (
    <YMaps>
        <Map defaultState={{ center: [55.76172006899202, 37.604591500000005], zoom: 16 }} width={"55%"} height={"512px"}>
            <Placemark defaultGeometry={[55.76172006899202, 37.604591500000005]} />
        </Map>
    </YMaps>
);

export default MyMap;