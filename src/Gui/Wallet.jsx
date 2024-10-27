import { RoundedBox } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"

export function Wallet({ position, animate, onClick }) {
  const wallet = useRef()

  useFrame((state, delta) => {
    if (animate) {
      wallet.current.rotation.y -= delta * 0.5
    }
  })

  return (
    <>
      <group onClick={onClick} position={position} scale={2.5} ref={wallet}>
        <Sphere position={[8, 0, 3]} scale={[2, 2, 0.5]} arg={[1, 32, 16]}>
          <meshStandardMaterial color='yellow' transparent='true' opacity={0.8} />
        </Sphere>
        <RoundedBox position={[6, 0, 1]} args={[10, 5, 5]} radius={0.4}>
          <meshStandardMaterial color='blue' transparent='true' opacity={0.2} />
        </RoundedBox>
        <RoundedBox args={[20, 20, 5]} radius={2}>
          <meshStandardMaterial color='yellow' transparent='true' opacity={0.6} />
        </RoundedBox>
      </group>
    </>
  )
}
