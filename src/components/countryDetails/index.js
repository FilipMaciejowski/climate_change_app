import React, {useEffect, useState} from 'react';
import Loader from "../loader";
import DisplayImages from "../displayImages";
import { Collapse } from "antd";
const { Panel } = Collapse; 

const CountryDetails = ({ getDetails, status, details, countryName}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentDetails, setCurrentDetails] = useState(details);

  useEffect(() => {
    getDetails();
  }, [countryName]);

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  useEffect(() => {
    setCurrentDetails(details);
  }, [details]);

  return (
    <>
      {currentStatus === "FULFILLED" ? (
        <>
          {currentDetails.data !== undefined ? (
            <div>
              <Collapse accordion>
                <Panel header="Flag" key="1">
                  <img src={currentDetails.data[0].flag} alt="img"></img>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p></p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p></p>
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
