import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader.jsx';
import { preview } from '@/assets/index.js';
import Image from 'next/image.js';
import { FaUpload } from 'react-icons/fa';
import UploadForm from '@/components/Upload';

const reports = () => {
  const [image, setImage] = useState({
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'IIaQTq7Ihdmtdm1Wjk5wUOEwpkGqGAi2';
  const locationKey = '29, 70';

  // useEffect(() => {
  //   async function fetchData() {
  //     // const baseUrl = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search`;
  //     // const baseUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/`;
  //     const queryParameters = `?apikey=${apiKey}&q=${locationKey}`;
  //     const response = await fetch(baseUrl + queryParameters);
  //     const data = await response.json();
  //     console.log(data);
  //     setWeatherData(data);
  //   }
  //   fetchData();
  // }, [apiKey, locationKey]);

  // AI - IMAGE
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  return (
    <div className="pt-14 md:pt-2">
      <div className="m-4 md:mx-16 lg:mx-18">
        <h2 className="text-xl">Reports</h2>
        {/* md:mx-12 lg:mx-12 px-4 */}
        {/* Content */}
        <div
          className="inline-block w-full lg:grid lg:grid-cols-2 gap-4 pt-4"
          style={{ gridTemplateColumns: '3fr 1fr' }}
        >
          {/* Machine Learning */}
          <div>
            <div
              className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 p-3 lg:h-96 md:h-96 flex sm:h-96 justify-center items-center"
            >
              {image.photo ? (
                <Image
                  src={preview}
                  alt="satellite-image"
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
            <div>
              <UploadForm />
            </div>
          </div>

          {/* Report List */}
          {/* IIaQTq7Ihdmtdm1Wjk5wUOEwpkGqGAi2 */}
          <div className="bg-blue-600">Report Field</div>
        </div>
      </div>
    </div>
  );
};

export default reports;
