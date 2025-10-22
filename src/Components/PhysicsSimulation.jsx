"use client";
import {Canvas} from '@react-three/fiber';
import {useFrame} from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { createRef, Suspense, useEffect, useState } from 'react';

import React, {useRef, useMemo} from 'react';
import { AmbientLight, SphereGeometry, Spherical } from 'three';
import SphericalBody  from './SphericalBody.jsx';



const PhysicsSimulation = ({n_bodies, radii, masses, colors, positions, children, linearVelocity, angularVelocity, gravitationalConstant, ...args}) => {
    
    




    //instatiate arrays for simulations
    const n_bodies_num = n_bodies ? n_bodies : 2;
    const n_bodies_array = []
    const bodyRefs = useMemo(() => Array.from({length: n_bodies_num}).map(() => React.createRef()), []);
    const [runningSimulation, setSimulationState] = useState(true);
    let firstRun = true;


    //variables for debugging
    let maxR = {x: 0, y: 0, z: 0};
    let com = {x: 0, y: 0, z:0};
    let totalMass = 0;

    
    let gravitationalForceVector;
    //iterate over n_bodies and create array of objects with radius, mass, color, and position vectors
    for(let i = 0; i < n_bodies_num; i++){
        n_bodies_array.push({radius: radii[i] ?? 1, mass: masses[i] ?? 1, color: colors[i] ?? "red", position: positions[i] ?? [0,0,0], id: i + 1, linearVelocity: linearVelocity[i] ?? [0,0,0], forceRef: bodyRefs[i]});
    }

    
    
    

    
    
    //use Frame is used because we want to nudge the bodies every frame
    //if we skip frames then the simulation doesnt work
    useFrame(()=> {
        if(bodyRefs[n_bodies - 1].current && !runningSimulation){

            if(firstRun){
                // there is no way to edit the colliders used to set the masses, 
                // therefore, we must use a first frame to set the masses before calulation
                for(let i = 0; i < n_bodies_num; i++){
                    bodyRefs[i].current.setAdditionalMass(masses[i]);
                    totalMass += masses[i];
                }

                firstRun = false;

            }
            
            
            for(let i = 0 ; i < n_bodies_num; i++){
                com = {x: com.x + bodyRefs[i].current.mass() * bodyRefs[i].current.translation().x, 
                       y: com.y + bodyRefs[i].current.mass() * bodyRefs[i].current.translation().y,
                       z: com.z + bodyRefs[i].current.mass() * bodyRefs[i].current.translation().z}
            }
            
            com = {x: com.x / totalMass, y: com.y/ totalMass, z:com.z/totalMass};
            console.log(com)

                
                


                for(let i = 0; i < n_bodies_num; i++){
                    for(let j = 0; j < n_bodies; j++){
                        if( i != j){

                            
                            
                            let targetBody = bodyRefs[i].current;
                            let currentBody = bodyRefs[j].current;
                            

                            
                            let r = {x: currentBody.translation().x - targetBody.translation().x ?? 0, 
                                    y: currentBody.translation().y - targetBody.translation().y ?? 0,
                                    z: currentBody.translation().z - targetBody.translation().z ?? 0};

                            let rNormalized = {x: r.x / getMagnitude(r), 
                                            y: r.y / getMagnitude(r), 
                                            z: r.z / getMagnitude(r)};

                            let gravitationalForceScalar = ( gravitationalConstant * targetBody.mass() * currentBody.mass()) / getMagnitude(r);
                            
                            gravitationalForceVector = {x: gravitationalForceScalar * rNormalized.x, y: gravitationalForceScalar * rNormalized.y, z: gravitationalForceScalar * rNormalized.z};
                            
                            /*

                            if(getMagnitude(r) > getMagnitude(maxR)){
                                maxR = {x: r.x - com.x, y: r.y - com.y, z: r.z - com.z};
                            }

                            console.log(maxR);
                            */
                          
                            targetBody.applyImpulse(gravitationalForceVector, true);
                            
                            

                            
                        }
                    }


                }
            
            
            
        }


        //reset veriables so they dont carry over into the next
        //frames calculation
        com = {x: 0, y: 0, z:0};
    }
        , []);

    //until UI is implemented
    const handleKeyboardInput = (e) => {
        
        if(e.keyCode == 32){
            setSimulationState(!runningSimulation);
        }
    }
    addEventListener("keydown", handleKeyboardInput);

    //vector helper function
    const getMagnitude = (vector) => {
        return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2) + Math.pow(vector.z, 2));
    }
    
    
    return (
            <>
                <directionalLight intensity={1} position={[0,0,10]}/>
                <Suspense>
                    <Physics timeStep={1/60} gravity={[0, 0, 0]} paused={runningSimulation} colliders={false} >
                        {n_bodies_array.map((body) => (
                            <SphericalBody  radius={body.radius} mass={body.mass} color={body.color} position={body.position} key={body.id} linearVelocity={body.linearVelocity} angularVelocity={body.angularVelocity} ref={body.forceRef}/>
                        ))}
                    </Physics>
                </Suspense>
            </>
    );
};

export default PhysicsSimulation;