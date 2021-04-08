import React, { useEffect, useRef, useState } from "react";

interface IconInterface {
  variant: "hose" | "hut" | "shirt" | "schuh" | "tasche" | "schmuck";
}

const getText = async (url: string): Promise<string> => {
  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.text();
};

const Icon: React.FC<IconInterface> = ({ variant }) => {
  const [svg, setSvg] = useState("");
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    (async () => {
      const iconText = await getText(`/assets/icons/${variant}.svg`);

      if (isMountedRef.current) {
        setSvg(() => iconText);
      }
    })();

    return () => {
      isMountedRef.current = false;
    };
  }, [variant]);

  // eslint-disable-next-line react/no-danger
  return <i dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default Icon;
