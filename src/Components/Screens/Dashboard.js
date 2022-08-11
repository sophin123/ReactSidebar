import React from "react";
import { FaGithub } from "react-icons/fa";
import UseAnimations from "react-useanimations";

export default function Dashboard() {
  return (
    <div style={{ marginLeft: "100px" }}>
      <h1>Dashboard Screen</h1>
      <UseAnimations
        animation={FaGithub}
        size={56}
        wrapperStyle={{ padding: 100 }}
      />
    </div>
  );
}
