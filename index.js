
import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/mapbox-gl.css';

var map = new Map({
    container: 'map', // container id
    hash: true,
    style: 'https://avoin-karttakuva.maanmittauslaitos.fi/vectortiles/stylejson/v20/hobby.json?TileMatrixSet=WGS84_Pseudo-Mercator&api-key=7cd2ddae-9f2e-481c-99d0-404e7bc7a0b2', // stylesheet location
    center: [24.937048, 60.198872], // starting position [lng, lat]
    zoom: 15.29, // starting zoom
});
    