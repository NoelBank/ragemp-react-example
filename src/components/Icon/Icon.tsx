import React, { useEffect, useRef, useState } from "react";
import Hose from "./icons/Hose.svg";
import hut from "./icons/hut.svg";
import schmuck from "./icons/schmuck.svg";
import Schuhe from "./icons/Schuhe.svg";
import shirt from "./icons/shirt.svg";
import tasche from "./icons/tasche.svg";

interface IconInterface {
  variant: string;
}

const Icon: React.FC<IconInterface> = ({ variant }) => {
  const [svg, setSvg] = useState("");
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    switch (variant) {
      case "Hose":
        setSvg(Hose);
        break;

      case "hut":
        setSvg(hut);
        break;

      case "schmuck":
        setSvg(schmuck);
        break;

      case "Schuhe":
        setSvg(Schuhe);
        break;

      case "shirt":
        setSvg(shirt);
        break;

      case "tasche":
        setSvg(tasche);
        break;
      default:
        console.log(variant, " not found");
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [variant]);

  // eslint-disable-next-line react/no-danger
  return <img src={svg} />;
};

export default Icon;
