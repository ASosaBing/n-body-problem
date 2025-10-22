"use client";
import { useFrame } from '@react-three/fiber';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import React, {useRef, useEffect} from 'react';



const SphericalBody = ({radius, color, position, mass, linearVelocity, angularVelocity, ref, ...arr}) => {
    //setting all out props to variables to passthrough to our rigid body
    //using nullish coalescing operator to see if any of these are null
    radius = radius ?? 1;
    color = color ?? 'blue';
    position = position ?? [0, 0, 0];
    mass = mass ?? 1;
    linearVelocity = linearVelocity ?? [0,0,0];
    angularVelocity = angularVelocity ?? [0,0,0];
    const rigidBody = ref;

    


    
    return (


        <RigidBody ref={rigidBody} position={position} colliders="ball"  density={0.0} mass={0} linearVelocity={linearVelocity} angularVelocity={angularVelocity}>
            <mesh>
                
                <sphereGeometry args={[radius]} />
                <meshLambertMaterial color={color}/>
            </mesh>
        </RigidBody>
    );
};

export default SphericalBody;