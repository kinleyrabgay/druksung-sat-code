import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {};
  return (
    // <form onSubmit={handleSubmit}>
    //   {/* <input type="file" id="file" name="file" onChange={handleFileChange} /> */}
    //   <div>
    //     <FormField />
    //   </div>
    // </form>
    <div className="relative cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
      <span className="mr-2">
        <FaUpload />
      </span>
      <span>Select file</span>
      <input
        id="file"
        name="file"
        type="file"
        className="sr-only"
        onChange={handleFileChange}
      />
      <button
        type="button"
        className="absolute inset-0 w-full h-full opacity-0"
        onClick={handleUpload}
      />
    </div>
  );
};

export default UploadForm;
