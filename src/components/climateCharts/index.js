import React, { useEffect, useState } from 'react';
import Loader from "../loader";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ClimateCharts = ({ getClimateData, status, climateData }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentClimateData, setCurrentClimateData] = useState(climateData);

  useEffect(() => {
    getClimateData();
  }, []);

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  useEffect(() => {
    setCurrentClimateData(climateData);
  }, [climateData]);

  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  };

  return (
    <>
      {currentStatus === "FULFILLED" ? (
        <>
          {currentClimateData.data !== undefined ? (
            <div>
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          ) : (
            <p>Data not found in database</p>
          )}
        </>
      ) : (
        <Loader minHeight={300} />
      )}
    </>
  )
};

export default ClimateCharts;
