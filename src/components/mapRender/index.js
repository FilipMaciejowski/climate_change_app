import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import React, { useState, forwardRef, useImperativeHandle } from "react";

import { AutoComplete, Button } from 'antd';
import 'antd/dist/antd.css';


const MapRender = forwardRef(({ setTooltipContent, openForm, geoData, countryNames }, ref) => {
  const [searchBtnDisabled, setSearchBtnDisabled] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [currentChosenGeo, setCurrentChosenGeo] = useState({});

  useImperativeHandle(ref, () => ({
    callResetData() {
      resetData();
    }
  }));

  const resetData = () => {
    setSelectedCountry('');
    setSearchBtnDisabled(true)
  };

  const countrySelected = selectedCountry => {
    setSearchBtnDisabled(false);
    setSelectedCountry(selectedCountry);
  };

  const setFillStyle = (geo) => {
    if (geo.properties.NAME === selectedCountry) {
      setCurrentChosenGeo(geo);
      return "#F53"
    } else {
      return "#D6D6DA"
    }
  };

  const onChangeSearchHandler = () => {
    if (!searchBtnDisabled) {
      setSearchBtnDisabled(true);
      setSelectedCountry('')
    }
  };

  const setMapValues = (geographies) => {
    return geographies.map(geo => (
      <Geography
        key={geo.rsmKey}
        geography={geo}
        onMouseEnter={() => {
          const { NAME } = geo.properties;
          setTooltipContent(`${NAME}`);
        }}
        onMouseLeave={() => { setTooltipContent("") }}
        onClick={() => openForm(geo.properties.NAME, geo.properties.ISO_A2, geo.properties.ISO_A3)}
        style={{
          default: {
            fill: setFillStyle(geo),
            outline: "none"
          },
          hover: {
            fill: "#F53",
            outline: "none"
          },
          pressed: {
            fill: "#E42",
            outline: "none"
          }
        }}
      />
    ))
  };

  return (
    <div className='map__wrapper'>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoData}>
            {({ geographies }) =>
              setMapValues(geographies)
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className='search-input'>
        <AutoComplete
          allowClear
          style={{ width: 200 }}
          dataSource={countryNames}
          placeholder="Search country"
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          onSelect={(selectedCountry) => { countrySelected(selectedCountry)} }
          onChange={() => { onChangeSearchHandler()} }
        />
        <Button
          type="primary"
          disabled={searchBtnDisabled}
          onClick={() =>  openForm(currentChosenGeo.properties.NAME, currentChosenGeo.properties.ISO_A2, currentChosenGeo.properties.ISO_A3)}
        >
          Check
        </Button>
      </div>
    </div>
  )
});

export default MapRender;





