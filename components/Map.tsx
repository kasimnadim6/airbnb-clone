import { useState } from 'react';
import MapBox, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { Stay } from '../interface/StayProps';
import { Coordinates, MapProps } from '../interface/MapProps';
import { MapPinIcon } from '@heroicons/react/20/solid';

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

  return (
    <MapBox
      mapStyle="mapbox://styles/kasimnadim/cl9r9ct5g001314p02bxxjjn1"
      mapboxAccessToken={process.env.map_access_token}
      initialViewState={{ latitude, longitude, zoom: 11 }}
      style={{ width: '100%', height: '100%' }}
    >
      {data.map((doc: Stay) => (
        <div key={doc.long}>
          <Marker latitude={doc.lat} longitude={doc.long} anchor="bottom">
            <MapPinIcon
              className="h-7 text-red-400 animate-bounce"
              onClick={() => setSelectedLocation(doc)}
            />
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
