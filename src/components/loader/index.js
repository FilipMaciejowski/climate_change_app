import React from "react";
import { Spin } from "antd";
import "./style.scss";

const Loader = ({ minHeight, minWidth }) => {
  let styles = {};

  if (minHeight) {
    styles.minHeight = minHeight;
  }
  if (minWidth) {
    styles.minWidth = minWidth;
  }

  return (
    <div className="loader" style={styles}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
