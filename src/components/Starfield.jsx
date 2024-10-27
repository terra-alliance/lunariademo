import { useRef } from "react"
import { Stars } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export const Starfield = ({ ...props }) => {
  const stars = useRef()
  useFrame((state, delta) => (stars.current.rotation.z -= delta * 0.015))
  return <Stars ref={stars} {...props} />
}
