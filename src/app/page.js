'use client';
//style imports
import styles from "./page.module.css";

//component imports
import PhysicsSimulation from "../Components/PhysicsSimulation/PhysicsSimulation.jsx";
import PhysicsControls from "../Components/PhysicsControls/PhysicsControls.jsx";
import PhysicsButton from "../Components/Button/PhysicsButton.jsx";

//three.js imports
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


export default function Home() {
  let bodies = 2;
  let masses = [1, 1000];
  let radii = [5, 20];
  let colors = ["red", "green"];
  let positions = [[-50, 0, 0], [50, 0, 0]];
  let linearVelocity = [[0, 200, 0], [0, -.2, 0]];
  let angularVelocity = [[0, 0, 0], [0, 0, 0]];
  let gravitationalConstant = 1;

  
  
  



  return (
    <div className={styles.page} id="page-container">


      {/*The control UI for the simulation */}
      <PhysicsControls/>
      

      {/*all initial condiitons for the simulation*/}
      <Canvas  camera={{position: [0, 0, 50], fov: 75, near: 0.1, far: 10000}}>
        <PhysicsSimulation n_bodies={bodies} radii={radii} masses={masses} colors={colors} positions={positions} linearVelocity={linearVelocity} angularVelocity={angularVelocity} gravitationalConstant={gravitationalConstant}/>
        <OrbitControls/>
      </Canvas>

      
      
    </div>
  );
}
