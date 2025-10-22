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
        <PhysicsSimulation n_bodies={2} radii={[5, 10]} masses={[1, 1000]} colors={["red", "green"]} positions={[[-20, 0, 0], [20, 0, 0]]} linearVelocity={[[0,300,0], [0, -1.5, 0]]} angularVelocity={[]} gravitationalConstant={1}/>
        <OrbitControls/>
      </Canvas>
      
    </div>
  );
}
