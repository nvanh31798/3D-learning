import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadowRef = useRef();

  useFrame;
  return (
    <AccumulativeShadows
      ref={shadowRef}
      temporal
      frames={60}
      alphaTest={0.35}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.15]}
    >
      <RandomizedLight
        intensity={0.55}
        amount={4}
        radius={9}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        intensity={0.55}
        amount={4}
        radius={9}
        ambient={0.25}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
