'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import { createRoot } from "@react-three/fiber";

export default function Home() {
  return (
    <div className={styles.page} id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />


        <mesh onClick={() => console.log("wow")} position={[0, 0, 0]}>
          <boxGeometry args={[2, 2, 2]} rotation={[45, 45, 45]}/>
          <meshStandardMaterial color="#00FF00"/>
        </mesh>
      </Canvas>
    </div>
  );
}
