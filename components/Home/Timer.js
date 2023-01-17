import React from "react";

const Timer = () => {
  return (
    <div className="flex justify-center">
      <div className="wrapper">
        <div className="time-part-wrapper">
          <div className="time-part seconds tens">
            <div className="digit-wrapper">
              <span className="digit ">9</span>
              {[9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <span className="digit" key={num}>
                  {num}
                </span>
              ))}
            </div>
          </div>
          <div className="time-part seconds ones">
            <div className="digit-wrapper">
              <span className="digit">9</span>
              {[
                9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 90, 1,
                2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2,
                3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3,
                4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
                5, 6, 7, 8, 9,
              ].map((num) => (
                <span className="digit" key={num}>
                  {num}
                </span>
              ))}
            </div>
          </div>
          %
        </div>
      </div>
    </div>
  );
};

export default Timer;
