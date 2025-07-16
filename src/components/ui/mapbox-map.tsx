import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  mapboxAccessToken: string;
  marker: { lng: number; lat: number };
  zoom?: number;
  style?: React.CSSProperties;
  mapStyle?: string;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ mapboxAccessToken, marker, zoom = 14, style, mapStyle }) => {
  return (
    <Map
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={{ longitude: marker.lng, latitude: marker.lat, zoom }}
      style={style}
      mapStyle={mapStyle || "mapbox://styles/mapbox/streets-v11"}
      attributionControl={false}
    >
      <Marker longitude={marker.lng} latitude={marker.lat} anchor="bottom">
        <div style={{ width: 32, height: 32, background: '#2563eb', borderRadius: '50%', border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
      </Marker>
    </Map>
  );
};

export default MapboxMap; 