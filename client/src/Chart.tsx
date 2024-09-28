
import React, { useEffect, useState } from 'react';

import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];


const LineChart = () => {
    const [chart, setChart] = useState<Chart | undefined>(undefined)
    useEffect(() => {
        if (chart) {
            return;
        }
        const c = new Chart(
            document.getElementById('chart') as any,
            {
              type: 'bar',
              data: {
                labels: data.map(row => row.year),
                datasets: [
                  {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.count)
                  }
                ]
              }
            }
          );
          setChart(c);
    }, [chart]);
    return (
        <div style={{ maxWidth: '600px'}}>
            <canvas id="chart"></canvas>
        </div>
    );
};

export default LineChart;

