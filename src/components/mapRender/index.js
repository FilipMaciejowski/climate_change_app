import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import React from "react";

import { Select } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;

const MapRender = ({ setTooltipContent, openForm, geoUrl, countryNames }) => {

  const options = [];
  countryNames.forEach((name, index) => {
    options.push(<Option key={name + index}>{name}</Option>);
  });

  return (
    <div className='map__wrapper'>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => { setTooltipContent("") }}
                  onClick={() => openForm(geo.properties.NAME, geo.properties.ISO_A2, geo.properties.ISO_A3)
                  }
                  style={{
                    default: {
                      fill: "#D6D6DA",
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
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className='search-input'>
        <Select mode="tags"  tokenSeparators={[',']}>
          {options}
        </Select>
      </div>
    </div>
  )
};

export default MapRender;





