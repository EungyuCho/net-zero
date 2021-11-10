import React from "react";
import ReactSwipe from "react-swipe";

const FinalCarousel = ({ children }) => {
  let reactSwipeEl;

  return (
    <div style={{ width: "100vw" }}>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {children}
      </ReactSwipe>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            onClick={() => reactSwipeEl.prev()}
            style={{
              padding: "6px 15px",
              backgroundColor: "rgb(4 199 154 / 80%)",
              borderRadius: 5,
              marginRight: 15,
            }}
          >
            이전
          </span>
          <span
            onClick={() => reactSwipeEl.next()}
            style={{
              padding: "6px 15px",
              backgroundColor: "rgb(4 199 154 / 80%)",
              borderRadius: 5,
            }}
          >
            다음
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinalCarousel;
