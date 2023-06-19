import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiSettings, FiLogOut, FiMenu } from 'react-icons/fi';
import { FaGlobe, FaCloud, FaChartBar } from 'react-icons/fa';

const Sidebar = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {isMobile && (
        <>
          <div
            className={`fixed w-auto h-screen p-5 bg-white border-r-[1px] transition-all duration-300 ${
              isSidebarOpen ? 'left-0 z-50' : '-left-48 z-0'
            }`}
          >
            <div className="flex flex-col items-center">
              <Link href="/" onClick={toggleSidebar}>
                <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                  <RxSketchLogo size={20} />
                </div>
              </Link>
              <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

              {/* Add Dashboard */}
              <Link href="/" onClick={toggleSidebar}>
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <RxDashboard size={20} />
                </div>
              </Link>

              {/* Add Chart */}
              <Link href="/charts" onClick={toggleSidebar}>
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <FaChartBar size={20} />
                </div>
              </Link>

              {/* Add Weather */}
              <Link href="/weathers" onClick={toggleSidebar}>
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <FaCloud size={20} />
                </div>
              </Link>

              {/* Add Map */}
              <Link href="/maps" onClick={toggleSidebar}>
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <FaGlobe size={20} />
                </div>
              </Link>

              {/* Add Report */}
              <Link href="/reports" onClick={toggleSidebar}>
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <HiOutlineDocumentReport size={20} />
                </div>
              </Link>

              {/* Add Team */}
              <Link href="/teams" onClick={toggleSidebar}>
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <RxPerson size={20} />
                </div>
              </Link>

              {/* Add Settings */}
              <Link href="/settings" onClick={toggleSidebar}>
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <FiSettings size={20} />
                </div>
              </Link>
            </div>

            {/* Add Logout Button */}
            <div className="flex flex-col items-center mt-auto">
              <Link href="/logout">
                <div className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg inline-block cursor-pointer">
                  <FiLogOut size={20} />
                </div>
              </Link>
            </div>
          </div>

          <div className="fixed top-0 w-full h-16 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md backdrop-saturate-150 border-b-[1px] flex justify-between items-center px-4">
            <div
              className="text-gray-600 cursor-pointer"
              onClick={toggleSidebar}
              style={{ opacity: 0.8 }}
            >
              <FiMenu size={20} />
            </div>
          </div>
        </>
      )}

      {!isMobile && (
        <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
          <div className="flex flex-col items-center">
            {/* Add Druksung */}
            <Link href="/">
              <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                <RxSketchLogo size={20} />
              </div>
            </Link>
            <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

            {/* Add Dashboard */}
            <Link href="/">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <RxDashboard size={20} />
              </div>
            </Link>

            {/* Add Chart */}
            <Link href="/charts" onClick={toggleSidebar}>
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FaChartBar size={20} />
              </div>
            </Link>

            {/* Add Weather */}
            <Link href="/weathers" onClick={toggleSidebar}>
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FaCloud size={20} />
              </div>
            </Link>

            {/* Add Map */}
            <Link href="/maps">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FaGlobe size={20} />
              </div>
            </Link>

            {/* Add Report */}
            <Link href="/reports">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <HiOutlineDocumentReport size={20} />
              </div>
            </Link>

            {/* Add Team */}
            <Link href="/teams">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <RxPerson size={20} />
              </div>
            </Link>

            {/* Add Settings */}
            <Link href="/settings">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FiSettings size={20} />
              </div>
            </Link>
          </div>

          {/* Add Logout Button */}
          <div className="flex flex-col items-center mt-auto">
            <Link href="/logout">
              <div className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg inline-block cursor-pointer">
                <FiLogOut size={20} />
              </div>
            </Link>
          </div>
        </div>
      )}

      <main className={`${isMobile ? '' : 'ml-20'} w-full`}>{children}</main>
    </div>
  );
};

export default Sidebar;
