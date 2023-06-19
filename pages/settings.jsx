import React from 'react';
import { ChartsHeader, LineChart } from '../components';
import ScaterChart from '@/components/Charts/ScaterChart';

const settings = () => {
  return (
    <div className="pt-12">
      <div className="justify-between p-4">
        <h2>Settings</h2>
        <ChartsHeader category="Line" title="Inflation Rate" />
        <div className="w-full">
          <ScaterChart />
        </div>
      </div>
    </div>
  );
};

export default settings;
