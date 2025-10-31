'use client';

import React from "react";

//style imports
import styles from "./page.module.css";

//component imports
import PhysicsSimulation from "../Components/PhysicsSimulation/PhysicsSimulation.jsx";
import PhysicsControls from "../Components/PhysicsControls/PhysicsControls.jsx";
import PhysicsButton from "../Components/Button/PhysicsButton.jsx";

//three.js imports
import {Canvas} from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";


export default function Home() {



  const [bodies, setNumBodies] = React.useState(3);
  const [masses, setMasses] = React.useState([1, 1000, 100]);
  let [radii, setRadii] = React.useState([5, 20, 10]);
  let [colors, setColors] = React.useState(["red", "green", "blue"]);
  let [positions, setPositions] = React.useState([[-50, 0, 0], [50, 0, 0], [25, 25, 0]]);
  let [linearVelocity, setLinearVelocity] = React.useState([[0, 200, 0], [0, -.2, 0], [0, 200, 0]]);
  let [angularVelocity, setAngularVelocity] = React.useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  let [gravitationalConstant, setGravitationalConstant] = React.useState(1);

  


  const [paused, setPaused] = React.useState(true);
  const pauseFunction = () => {
    setPaused(!paused);
    
  }
  
  const [resetToggle, setResetToggle] = React.useState(false);
  const resetFunction = () => {
    console.log("Resetting simulation...");
    //add reset logic here
    setResetToggle(true);
    setTimeout(() => {
      setResetToggle(false);
    }, 200);

  }
  



  return (
    <div className={styles.page} id="page-container">


      {/*The control UI for the simulation */}
      <PhysicsControls onClickFunctions={{pauseFunction: pauseFunction, resetFunction: resetFunction, setNumBodesFunction: setNumBodies, setMassesFunction: setMasses, setRadiiFunction: setRadii, setColorFunction: setColors, setPositionsFunction: setPositions, setLinearVelocityFunction: setLinearVelocity, setAngularVelocityFunction: setAngularVelocity, setGravitationalConstantFunction: setGravitationalConstant}} simulationPaused={paused} />
      

      {/*all initial condiitons for the simulation*/}
      <Canvas camera={{position: [0, 0, 50], fov: 75, near: 0.1, far: 10000}}>
             {/*<OrthographicCamera makeDefault={true} position={[0, 0, 100]} zoom={2}/>*/}
        {!resetToggle && <PhysicsSimulation n_bodies={bodies} radii={radii} masses={masses} colors={colors} positions={positions} linearVelocity={linearVelocity} angularVelocity={angularVelocity} gravitationalConstant={gravitationalConstant} pauseSimulation={paused}/>}
        <OrbitControls/>
      </Canvas>

      
      
    </div>
  );
}
