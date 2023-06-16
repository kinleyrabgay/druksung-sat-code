import React, { useEffect, useState } from 'react';
import demo from '../data/demo.png';
import Weather from './Weather';
import Image from 'next/image';
import { preview } from '@/assets';
import Loader from './Loader';

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
  const [image, setImage] = useState({
    photo: '',
  });
  const [loading, setLoading] = useState(true);
  const [generatingImg, setGeneratingImg] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://dalle-arbb.onrender.com/api/v1/dalle',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      setImage({ ...image, photo: `data:image/jpeg;base64,${data.photo}` });
      console.log(data);
      if (data) {
        setGeneratingImg(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:mx-12 lg:mx-12 px-4">
      <div
        className="inline-block w-full lg:grid lg:grid-cols-2 gap-4"
        style={{ gridTemplateColumns: '3fr 1fr' }}
      >
        {/* Display the satellite image */}
        <div>
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 lg:h-96 md:h-96 flex sm:h-96 justify-center items-center">
            {image.photo ? (
              <Image
                src={preview}
                alt="preview"
                className="w-9/12 h-full object-contain opacity-40"
              />
            ) : (
              <Image
                src={preview}
                alt="preview"
                className="w-9/12 h-full object-contain opacity-40"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
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
