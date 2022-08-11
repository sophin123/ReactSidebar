import React from "react";

export default function Icons({ img, alt }) {
  return (
    <img
      src={img}
      alt={alt}
      style={{
        width: 20,
        height: 20,
      }}
    />
  );
}
