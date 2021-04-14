import React, { useEffect, useRef, useState } from "react";
import * as hose from "./icons/hose.svg";
import * as hut from "./icons/hut.svg";
import * as schmuck from "./icons/schmuck.svg";
import * as schuh from "./icons/schuh.svg";
import * as shirt from "./icons/shirt.svg";
import * as tasche from "./icons/tasche.svg";

const Icon = ({ variant }) => {
  const [svg, setSvg] = useState("");
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    switch (variant) {
      case "hose":
        setSvg(hose);
        break;

      case "hut":
        setSvg(hut);
        break;

      case "schmuck":
        setSvg(schmuck);
        break;

      case "schuh":
        setSvg(schuh);
        break;

      case "shirt":
        setSvg(shirt);
        break;

      case "tasche":
        setSvg(tasche);
        break;
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [variant]);

  // eslint-disable-next-line react/no-danger
  return <i dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default Icon;
