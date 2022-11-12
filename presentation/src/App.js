import React, { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, useAspect, useVideoTexture, useTexture, MeshReflectorMaterial  } from '@react-three/drei'
import * as THREE from 'three';

function Box() {
  const [size, set] = useState(0.5)
  return (
  <group>
    <boxHelper args={[new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ) )]} >
      <meshBasicMaterial color={0x8ae2ec} />
      <VideoScene />
    </boxHelper>
    <mesh position={[-1, -1, -1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={0}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0}
          maxDepthThreshold={1.4}
          color="#090909"
          metalness={0.5}
        />
      </mesh>
  </group>
  )
}
//<video controls="" autoplay="" style="max-height:100%;max-width:100%;width:auto;" name="media" src="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/video/Infinite_Patterns.mp4" type="video/mp4" />
function VideoScene() {
  const size = useAspect(179, 98)
  return (
    <mesh position={[0, 0, 1]} transform>
      <planeGeometry args={[2,1]} />
      <Suspense fallback={<FallbackMaterial url="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/images/119894003_1062909167475545_6295194101995377324_n.jpg" />}>
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