import { useState } from 'react';
import MapBox, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { Stay } from '../interface/StayProps';
import { Coordinates, MapProps } from '../interface/MapProps';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({ data }: MapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<{
    [key: string]: any;
  }>({});
  const coordinates: Coordinates[] = data.map((doc: Stay) => {
    return {
      latitude: doc.lat,
      longitude: doc.long,
    };
  });
  const { latitude, longitude }: any = getCenter(coordinates);
  const [viewPort, setViewPort] = useState({
    with: '100%',
    height: '100%',
    latitude,
    longitude,
    zoom: 11,
    style: { width: '100%', height: '100%' },
  });

  return (
    <MapBox
      mapStyle="mapbox://styles/kasimnadim/cl9oiaw53000c15obkc228nlb"
      mapboxAccessToken={process.env.map_access_token}
      {...viewPort}
      //   initialViewState={{ latitude, longitude, zoom: 11 }}
      style={{ width: '100%', height: '100%' }}
      onDrag={({ viewState: { latitude, longitude, zoom } }) => {
        setViewPort((prev) => {
          return {
            ...prev,
            latitude,
            longitude,
            zoom,
          };
        });
      }}
      onZoom={({ viewState: { zoom } }) => {
        setViewPort((prev) => {
          return {
            ...prev,
            zoom,
          };
        });
      }}
    >
      {data.map((doc: Stay) => (
        <div key={doc.long}>
          <Marker latitude={doc.lat} longitude={doc.long} anchor="bottom">
            <p
              onClick={() => setSelectedLocation(doc)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📍
            </p>
          </Marker>
          {selectedLocation.long === doc.long ? (
            <Popup
              latitude={doc.lat}
              longitude={doc.long}
              closeOnClick={false}
              onClose={() => setSelectedLocation({})}
            >
              {doc.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </MapBox>
  );
};

export default Map;
