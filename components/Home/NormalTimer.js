import React, { useEffect, useState } from "react";

const NormalTimer = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prevPercentage + 1;
      });
    }, 50);

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
