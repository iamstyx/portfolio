import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function Cube() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2
  })

  return (
    <mesh ref={meshRef} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[3,3,3]} />
      <meshStandardMaterial 
        color="#88c6db"
        opacity={0.3}
        transparent
        wireframe
      />
    </mesh>
  )
}

export default function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
