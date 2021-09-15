import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 70 70" {...props}>
      <image width="70" height="70" href="/images/menu/logo_mobile.png" />
    </Svg>
  );
};

export default Icon;
