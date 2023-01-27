import React from "react";
import Icon from "../common/Icon";

const Button = (handler: any, data: any, iconKind: string) => {
  console.log(iconKind, ">>>>");
  console.log(data, ">>>>");
  return (
    <button onClick={() => handler(data)} style={{ all: "unset" }}>
      <Icon kind={iconKind} color={"white"} />
    </button>
  );
};

export default Button;
