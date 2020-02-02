import React, { useEffect, useState } from 'react';
import Loader from "../loader";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ClimateCharts = ({ getClimateData, status, climateData, countryName }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentClimateData, setCurrentClimateData] = useState(climateData);
  const [chartSeries, setChartSeries] = useState([]);
  const [chartYears, setChartYears] = useState([]);

  useEffect(() => {
    getClimateData();
  }, []);

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  useEffect(() => {
    setCurrentClimateData(climateData);
    if (climateData.data) {
      setSeries();
      setYears();
    }
  }, [climateData]);

  const setSeries = () => {
    const chartSeriesData = [];
    climateData.data.forEach((decade) => {
      chartSeriesData.push(decade.data)
    });
    setChartSeries(chartSeriesData);
  };

  const setYears = () => {
    const years = [];
    climateData.data.forEach((decade) => {
      years.push(decade.year)
    });
    setChartYears(years)
  };

  const calculateDifferenceTemperature = (temperature) => {
    const currentTemperatureArrIndex = chartSeries.findIndex(t => t === temperature);
    const previousTemperature = chartSeries[currentTemperatureArrIndex - 1];
    if (previousTemperature) {
      return (temperature - previousTemperature).toFixed(3);
    } else {
      return '-'
    }
  };

  return (
    <>
      {currentStatus === "FULFILLED" ? (
        <>
          {currentClimateData.data !== undefined ? (
            <div>
              <HighchartsReact
                highcharts={Highcharts}
                options={{
                  title: {
                    text: `${countryName} - average temperature in a decade`
                  },

                  yAxis: {
                    title: {
                      text: 'Temperature (°C)'
                    }
                  },
                  xAxis: {
                    categories: chartYears,
                  },

                  series: [{
                    name: 'Decade',
                    data: chartSeries
                  }],

                  tooltip: {
                    backgroundColor: '#FCFFC5',
                    borderColor: 'black',
                    borderRadius: 10,
                    borderWidth: 1,
                    formatter: function() {
                      return 'Temperature ' + this.y.toFixed(3) +
                        '<br/> Temperature difference ' + calculateDifferenceTemperature(this.y);
                    }
                  }
                }}
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
