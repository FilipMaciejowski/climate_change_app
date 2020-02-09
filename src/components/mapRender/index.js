import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect
} from "react";
import { AutoComplete, Button } from "antd";
import "antd/dist/antd.css";

const MapRender = forwardRef(
  ({ setTooltipContent, openForm, geoData, countryNames, themeMode }, ref) => {
    const [searchBtnDisabled, setSearchBtnDisabled] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [currentChosenGeo, setCurrentChosenGeo] = useState({});
    const [mapScale, setMapScale] = useState(200);

    useEffect(() => {
      updateWidthMap();
      window.addEventListener("resize", updateWidthMap);
    });

    const updateWidthMap = () => {
      const width = window.innerWidth;
      if (width >= 1530) {
        setMapScale(200);
      } else if (width < 1530 && width > 1300) {
        setMapScale(180);
      } else if (width <= 1300) {
        setMapScale(160);
      }
    };

    useImperativeHandle(ref, () => ({
      callResetData() {
        resetData();
      }
    }));

    const resetData = () => {
      setSelectedCountry("");
      setSearchBtnDisabled(true);
    };

    const countrySelected = selectedCountry => {
      setSearchBtnDisabled(false);
      setSelectedCountry(selectedCountry);
    };

    const setFillStyle = geo => {
      if (geo.properties.NAME === selectedCountry) {
        setCurrentChosenGeo(geo);
        return "rgb(0, 153, 255)";
      } else {
        return "lightblue";
      }
    };

    const setMapFillStyle = () => {
      if (themeMode) {
        return "rgb(120, 130, 133)";
      } else {
        return "rgb(83, 186, 255)";
      }
    };
    const onChangeSearchHandler = () => {
      if (!searchBtnDisabled) {
        setSearchBtnDisabled(true);
        setSelectedCountry("");
      }
    };

    const setMapValues = geographies => {
      return geographies.map(geo => (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          onMouseEnter={() => {
            const { NAME } = geo.properties;
            setTooltipContent(`${NAME}`);
          }}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
          onClick={() =>
            openForm(
              geo.properties.NAME,
              geo.properties.ISO_A2,
              geo.properties.ISO_A3
            )
          }
          style={{
            default: {
              fill: setFillStyle(geo),
              outline: "none"
            },
            hover: {
              fill: setMapFillStyle(),
              outline: "rgb(20, 154, 243)"
            },
            pressed: {
              fill: "rgb(20, 154, 243)",
              outline: "none"
            }
          }}
        />
      ));
    };

    return (
      <div className="map__wrapper">
        <ComposableMap data-tip="" projectionConfig={{ scale: mapScale }}>
          <ZoomableGroup>
            <Geographies geography={geoData}>
              {({ geographies }) => setMapValues(geographies)}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <div className="search-input">
          <AutoComplete
            allowClear
            style={{ width: 200 }}
            dataSource={countryNames}
            placeholder="Search country"
            filterOption={(inputValue, option) =>
              option.props.children
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            }
            onSelect={selectedCountry => {
              countrySelected(selectedCountry);
            }}
            onChange={() => {
              onChangeSearchHandler();
            }}
            dropdownMenuStyle={
              themeMode
                ? { background: "lightblue", font: "Lato" }
                : { background: "#AFE4E0" }
            }
          />
          <Button
            className={themeMode ? "ant-btn-primary-dark" : "ant-btn-primary"}
            type="primary"
            disabled={searchBtnDisabled}
            onClick={() =>
              openForm(
                currentChosenGeo.properties.NAME,
                currentChosenGeo.properties.ISO_A2,
                currentChosenGeo.properties.ISO_A3
              )
            }
          >
            Let's check
          </Button>
        </div>
      </div>
    );
  }
);

export default MapRender;
