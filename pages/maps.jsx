import React, { useState, useEffect } from 'react';
import { data } from '../data/data.js';

const maps = () => {
  const coordinates = { lat: 0, lng: 0 };

  const [gpsData, setGpsData] = useState([
    { name: 'Latitude', value: '40.7128° N' },
    { name: 'Longitude', value: '74.0060° W' },
    { name: 'Altitude', value: '10 M' },
  ]);
  const position = [51.505, -0.09];

  return (
    <div className="pt-12">
      <div className="flex justify-between p-4">
        <h2>Maps</h2>
        <h2>Welcome Back, Druksung</h2>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCsWIhicwjhyByX4K4iloLJB_Tavh_Tkx0' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
        ></GoogleMapReact> */}
        {/* <div className="w-50 h-50">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
    </div>
  );
};

export default maps;
