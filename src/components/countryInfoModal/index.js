import React, { useEffect, useState } from 'react';
import { Button, Modal } from "antd";
import DisplayImages from "../displayImages";
import Loader from "../loader";
import { Tabs } from 'antd';
import CountryDetails from "../countryDetails";
import ClimateCharts from "../climateCharts";



const CountryInfoModal = ({ formOpen, country, closeModal, getImagesURL, status, getDetails, getClimateData, mode }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  const renderLocation = images => (
    <>
      {images.length > 0 ? (
        <DisplayImages locationArray={images} />
      ) : (
        <p>Images not found in database</p>
      )}
    </>
  );

  const { TabPane } = Tabs;

  return (
    <Modal
      visible={formOpen}
      title={country.currentCountryName}
      onCancel={() => closeModal()}
      footer={[
        <button className="modal__btn" key="back" onClick={() => closeModal()}>
          Cancel
        </button>,
      ]}
      
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Images" key="1">
          {currentStatus === "FULFILLED" ? (
            renderLocation(getImagesURL())
          ) : (
            <Loader
              minHeight={300}
            />
          )}
        </TabPane>
        <TabPane tab="Details" key="2">
          <CountryDetails
            status={currentStatus}
            details={country.details}
            getDetails={getDetails}
          />
        </TabPane>
        <TabPane tab="Charts" key="3">
          <ClimateCharts
            status={currentStatus}
            getClimateData={getClimateData}
            climateData={country.climate}
            countryName={country.currentCountryName}
          />
        </TabPane>
      </Tabs>
    </Modal>
  )
};

export default CountryInfoModal;
