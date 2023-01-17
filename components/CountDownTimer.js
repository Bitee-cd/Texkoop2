import React from "react";

const CountDownTimer = () => {
  return (
    <div class="wrapper">
      <div class="time-part-wrapper">
        <div class="time-part days tens">
          <div class="digit-wrapper">
            <span class="digit">0</span>
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
              <span class="digit" key={num}>
                {num}
              </span>
            ))}
          </div>
        </div>
        <div class="time-part days ones">
          <div class="digit-wrapper">
            <span class="digit">0</span>
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
              <span class="digit" key={num}>
                {num}
              </span>
            ))}
          </div>
        </div>
        <div class="time-part hours tens">
          <div class="digit-wrapper">
            <span class="digit">0</span>
            {[5, 4, 3, 2, 1].map((num) => (
              <span class="digit" key={num}>
                {num}
              </span>
            ))}
          </div>
        </div>
        <div class="time-part hours ones">
          <div class="digit-wrapper">
            <span class="digit">0</span>
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
              <span class="digit" key={num}>
                {num}
              </span>
            ))}
          </div>
        </div>
        <div class="time-part minutes tens">
          <div class="digit-wrapper">
            <span class="digit">0</span>
            {[5, 4, 3, 2, 1].map((num) => (
              <span class="digit" key={num}>
                {num}
              </span>
            ))}
          </div>
        </div>
        <div class="time-part minutes ones">
          <div class="digit-wrapper">
            <span class="digit">0</span>
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
              <span class="digit" key={num}>
                {num}
              </span>
            ))}
          </div>
        </div>
        <div class="time-part-wrapper">
          <div class="time-part seconds tens">
            <div class="digit-wrapper">
              <span class="digit">0</span>
              {[5, 4, 3, 2, 1].map((num) => (
                <span class="digit" key={num}>
                  {num}
                </span>
              ))}
            </div>
          </div>
          <div class="time-part seconds ones">
            <div class="digit-wrapper">
              <span class="digit">0</span>
              {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
                <span class="digit" key={num}>
                  {num}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
