'use client';

import styles from "./page.module.css";
import PhysicsSimulation from "../Components/PhysicsSimulation.jsx";
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


export default function Home() {
  let masses = [1, 1000];
  
  const generateVelocities = () => {

  }



  return (
    <div className={styles.page} id="page-container">
      {/*all initial condiitons for the simulation*/}
      <Canvas  camera={{position: [0, 0, 1000], fov: 75, near: 0.1, far: 10000}}>
        <PhysicsSimulation n_bodies={3} radii={[10, 10, 10]} masses={[100, 100, 100]} colors={["red", "green"]} positions={[[-20, 0, 0], [20, 0, 0], [0, -100, 0]]} linearVelocity={[[0,60,-30], [30, -60, 0], [-30, 0, 30]]} angularVelocity={[]} gravitationalConstant={1}/>
        <OrbitControls/>
      </Canvas>
      
    </div>
  );
}
