import React from "react";

function NewComponent(props) {
  return (
    <div style={{ backgroundColor: "blue", color: "white", padding: "20px" }}>
      <strong>{props.children}</strong>
    </div>
  );
}

export default NewComponent;
