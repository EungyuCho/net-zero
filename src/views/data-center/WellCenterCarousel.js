import React from "react";
import FinalCarousel from "../../components/FinalCarousel.js";
import { toReactArray } from "../../util/react.util.js";

const WellCenterCarousel = () => {
  const datas = ["001", "002", "003", "004", "005", "006"];

  return (
    <FinalCarousel>
      {toReactArray(
        datas.map((data) => (
          <div
            style={{ position: "relative", flex: "0 0 100%", width: "100%" }}
          >
            <img
              src={`https://temp-js.s3.ap-northeast-2.amazonaws.com/well/${data}.png`}
              alt="없어용"
            />
          </div>
        ))
      )}
    </FinalCarousel>
  );
};

export default WellCenterCarousel;
