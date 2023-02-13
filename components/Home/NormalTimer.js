import React, { useEffect, useState } from "react";

const NormalTimer = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 99) {
          clearInterval(intervalId);
          return 99;
        }
        return prevPercentage + 1;
      });
    }, 30);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="">
      <div className="text-center">{percentage}%</div>
    </div>
  );
};

export default NormalTimer;
