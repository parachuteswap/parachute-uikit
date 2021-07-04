import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 2000 2000" {...props}>
        <circle xmlns="http://www.w3.org/2000/svg" cx="1000" cy="1000" r="1000"/>
        <path xmlns="http://www.w3.org/2000/svg" d="M574.41,746l426-426,169.86,169.86-426,426Zm.31,509.06,680.79-680.79,169.86,169.86L744.58,1424.92Zm935.41-425.69L829.34,1510.16,999.19,1680,1680,999.22ZM320,1000.36,489.86,830.5l169.86,169.86L489.86,1170.22Z"/>
    </Svg>
  );
};

export default Icon;
