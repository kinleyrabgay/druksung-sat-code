import { LineChart } from '@/components';
import BarChart from '@/components/Charts/BarChart';
import RadarChart from '@/components/Charts/RadarChart';
import ScatterChart from '@/components/Charts/ScaterChart';
import React from 'react';

const charts = () => {
  return (
    <div className="pt-14 md:pt-2">
      <div className="m-4 md:mx-16 lg:mx-18">
        <h2 className="text-xl">Reports</h2>
        {/* md:mx-12 lg:mx-12 px-4 */}
        {/* Content */}
        <div className="inline-block w-full">
          <div
            className="lg:grid lg:grid-cols-2 gap-4 pt-4"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            <div>
              <LineChart />
            </div>
            <div>
              <ScatterChart />
            </div>
            <div>
              <RadarChart />
            </div>
            <div>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default charts;
