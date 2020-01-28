import React, {useEffect, useState} from 'react';
import Loader from "../loader";
import { Collapse } from "antd";

const { Panel } = Collapse;

const CountryDetails = ({ status, details, getDetails }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentDetails, setCurrentDetails] = useState(details);
  const units = [" milions", "k km2"];

  useEffect(() => {
    getDetails();
  }, []);


  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  useEffect(() => {
    setCurrentDetails(details);
  }, [details]);

  const convertNumber = (number, typeData) => {
      return typeData ? Math.round(number / 100000) / 10 + units[0] : Math.round(number / 100) / 10 + units[1];
    }
  
  return (
    <>
      {currentStatus === "FULFILLED" ? (
        <>
          {currentDetails.data !== undefined ? (
            <div>
              <Collapse accordion>
                <Panel className="country__flag" header="Flag" key="1">
                  <img src={currentDetails.data[0].flag} alt="img" />
                </Panel>
                <Panel header="Population" key="2">
                  <p>
                    {convertNumber(currentDetails.data[0].population, true)}
                  </p>
                </Panel>
                <Panel header="Capital" key="3">
                  <p>{currentDetails.data[0].capital}</p>
                </Panel>
                <Panel header="Area" key="4">
                  <p>{convertNumber(currentDetails.data[0].area, false)}</p>
                </Panel>
              </Collapse>
            </div>
          ) : (
            <p>Images not found in database</p>
          )}
        </>
      ) : (
        <Loader minHeight={300} />
      )}
    </>
  );
};

export default CountryDetails;
