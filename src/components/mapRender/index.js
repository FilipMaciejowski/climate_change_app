import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import React from "react";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapRender = ({ setTooltipContent, openForm }) => {
  return (
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
  )
};

export default MapRender;





