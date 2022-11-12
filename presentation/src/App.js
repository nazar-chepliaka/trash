import React, { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, useAspect, useVideoTexture, useTexture  } from '@react-three/drei'
import * as THREE from 'three';

function Box() {
  const [size, set] = useState(0.5)
  return (
  <group>
    <boxHelper args={[new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ) )]} >
      <meshBasicMaterial color={0x8ae2ec} />
      <Html distanceFactor={1.1} position={[0, 0, 1]} transform>
        <h2>Presentation</h2>
        <video controls="" autoplay="" name="media" src="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/video/Infinite_Patterns.mp4" type="video/mp4" />
      </Html>
    </boxHelper>
  </group>
  )
}
//<video controls="" autoplay="" style="max-height:100%;max-width:100%;width:auto;" name="media" src="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/video/Infinite_Patterns.mp4" type="video/mp4" />
function VideoScene() {
  const size = useAspect(1, 1)
  return (
    <mesh scale={size} position={[0, 0, 0,51]}  distanceFactor={1.1} transform>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/images/photo_2022-07-03_12-06-35.png" />}>
        <VideoMaterial url="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/video/Infinite_Patterns.mp4" />
      </Suspense>
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 25, position: [0, 1, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <Box />
      <OrbitControls />
    </Canvas>
  )
}
