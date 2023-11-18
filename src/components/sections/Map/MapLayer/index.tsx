'use client';

import React from 'react';

import style from './style.module.scss';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import MarkerIcon from '@/assets/marker.svg';

export default function MapLayer() {
  const position: LatLngExpression = [78.064, 14.2335];
  const customIcon = new Icon({
    iconUrl: MarkerIcon.src,
    iconSize: [38, 38],
  });

  return (
    <div>
      <MapContainer
        className={style.map}
        center={position}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Баренцбург</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
