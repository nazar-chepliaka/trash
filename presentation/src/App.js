import React, { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, OrbitControls, Html, useAspect, useVideoTexture, useTexture, MeshReflectorMaterial } from '@react-three/drei'
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
  const video = document.getElementById( 'video' );
  const refVideo = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <group>
      

       <group
        onClick={(e) => (e.stopPropagation(), video.paused || video.ended ? refVideo.current.position.z = 1.01 : refVideo.current.position.z = 0.99, video.paused || video.ended ? video.play() : video.pause() )}
        >
          <mesh position={[0, 0, 0.99]} transform
            onPointerOver={(e) => (e.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}
            ref={refVideo}
          >
            <planeGeometry args={[2,1]} />
            <Suspense fallback={<FallbackMaterial url="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/holder.jpg" />}>
              <VideoMaterial video={video} />
            </Suspense>
            
          </mesh>
      </group>

      <group
        onClick={(e) => (e.stopPropagation(), video.paused || video.ended ? refVideo.current.position.z = 1.01 : refVideo.current.position.z = 0.99, video.paused || video.ended ? video.play() : video.pause() )}
        >
          <mesh position={[0, 0, 1]} transform
            onPointerOver={(e) => (e.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}
          >
            <planeGeometry args={[2,1]} />
            <FallbackMaterial url="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/holder.jpg" />
            
          </mesh>
      </group>
    </group>
  )
}

function VideoMaterial({ video }) {
  /*const texture = useVideoTexture(url)*/
  const texture = new THREE.VideoTexture( video );
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