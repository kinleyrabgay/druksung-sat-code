import React, { useEffect, useState } from 'react';
import demo from '../data/demo.png';
import Weather from './Weather';
import Image from 'next/image';

const GpsData = ({ data }) => (
  <div className="justify-start bg-gray-100 rounded-lg py-4">
    <p className="text-black font-bold text-2xl">{data.title}</p>
    <div className="border-b-1 border-gray-300 my-2" />
    <div className="grid grid-cols-2 mt-4 gap-y-4 gap-x-4">
      {data.values.map((item) => (
        <div key={item.name}>
          <p className="text-sm text-gray-500 font-medium">{item.name}</p>
          <p className="text-black font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => {
  const [gpsData, setGpsData] = useState([
    {
      title: 'GPS',
      values: [
        { name: 'Latitude', value: '40.7128° N' },
        { name: 'Longitude', value: '74.0060° W' },
        { name: 'Altitude', value: '10 M' },
      ],
    },
    {
      title: 'BCM',
      values: [
        { name: 'Latitude', value: '40.7128° N' },
        { name: 'Longitude', value: '74.0060° W' },
        { name: 'Altitude', value: '10 M' },
      ],
    },
    {
      title: 'Lider',
      values: [
        { name: 'Latitude', value: '40.7128° N' },
        { name: 'Longitude', value: '74.0060° W' },
        { name: 'Altitude', value: '10 M' },
      ],
    },
  ]);

  // useEffect(() => {
  //   generatePDFReport();
  // }, []);

  return (
    <div className="md:mx-12 lg:mx-12 px-4">
      <div
        className="inline-block w-full lg:grid lg:grid-cols-2 gap-4"
        style={{ gridTemplateColumns: '3fr 1fr' }}
      >
        {/* Display the satellite image */}
        <div>
          <div className="flex justify-center bg-blue-700 h-80 rounded-lg">
            <Image
              src={demo}
              alt="your-image-alt-text-here"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Display the satellite details */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gpsData.map((data) => (
              <GpsData key={data.title} data={data} />
            ))}
          </div>
        </div>

        {/* Display the weather */}
        <div>
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
