import React from "react";
import { Parallax } from "react-parallax";

function Cover({ img, title }) {
  return (
    <Parallax
      blur={{ min: -50, max: 40 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero-overlay "></div>

      <div
        className="hero-content text-center text-neutral-content"
        style={{ height: "500px" }}
      >
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </Parallax>
  );
}

export default Cover;
