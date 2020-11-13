import React, { FC, CSSProperties } from "react";

interface CenterProps {
  style?: CSSProperties;
}

const Center: FC<CenterProps> = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: "auto",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export { Center };
