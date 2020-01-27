import React, {useEffect, useState} from 'react';
import Loader from "../loader";
import DisplayImages from "../displayImages";

const CountryDetails = ({ getDetails, status, details}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentDetails, setCurrentDetails] = useState(details);

  useEffect(() => {
    getDetails()
  },[]);

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
          {currentDetails !== {} ? (
            <div>
              <p>tu będzie data ;)</p>

            </div>
            ) : (
              <p>Images not found in database</p>
          )}
        </>
      ) : (
        <Loader
          minHeight={300}
        />
      )}
    </>
  )
};

export default CountryDetails;
