import React, { useEffect, useState } from 'react';
import { Button, Modal } from "antd";
import DisplayImages from "../displayImages";
import Loader from "../loader";
import { Tabs } from 'antd';
import CountryDetails from "../countryDetails";



const CountryInfoModal = ({ formOpen, country, closeModal, getImagesURL, status, getDetails, activeTab }) => {
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
        <Button key="back" onClick={() => closeModal()}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loader={currentStatus}
          onClick={() => console.log(country.currentCountryName)}
        >
          Submit
        </Button>
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
            getDetails={getDetails}
            status={currentStatus}
            details={country.details}
          />
        </TabPane>
        <TabPane tab="Charts" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>,
    </Modal>
  )
};

export default CountryInfoModal;
