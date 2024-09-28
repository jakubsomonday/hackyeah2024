import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

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
                    label: 'Zrealizowane projekty',
                    data: data.map(row => row.count),
                    backgroundColor: '#C43641',

                  }
                ]
              }
            }
          );
          window.addEventListener("resize", () => {c.resize()}, false);
          setChart(c);
    }, [chart]);
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <canvas id="chart"></canvas>
        </div>
    );
};

export default LineChart;

