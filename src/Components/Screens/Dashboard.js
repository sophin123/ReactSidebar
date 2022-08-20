import React from "react";
import { FaGithub } from "react-icons/fa";
import UseAnimations from "react-useanimations";

const width = window.innerWidth;
const height = window.innerHeight;

export default function Dashboard() {
  return (
    <div class="album">
      <img
        src="https://picsum.photos/id/1028/800/600"
        alt="a forest after an apocalypse"
      />
      <img
        src="https://picsum.photos/id/15/800/600"
        alt="a waterfall and many rocks"
      />
      <img
        src="https://picsum.photos/id/1040/800/600"
        alt="a house on a mountain"
      />
      <img src="https://picsum.photos/id/106/800/600" alt="sime pink flowers" />
      <div
        className="dashboard"
        style={{
          position: "absolute",
          left: "50%",
          fontVariantCaps: "petite-caps",
        }}
      >
        <h1>Dashboard Screen</h1>
      </div>
    </div>
  );
  ß;
}
