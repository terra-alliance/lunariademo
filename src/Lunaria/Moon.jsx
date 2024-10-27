import { useState, useRef } from "react"
import { useCursor, useTexture } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

import { clock } from "@/global"

export default function Moon({ ...p }) {
  const [hovered, hover] = useState(false)
  const texture = useTexture({
    map: "https://res.cloudinary.com/dexin8o58/image/upload/v1684959064/moon_s8cjwu.webp",
    // bumpMap: "https://res.cloudinary.com/dexin8o58/image/upload/v1684959161/WAC_GLD100_E000N1800_016P_u5nn36.webp",
  })
  useCursor(hovered)
  const mesh = useRef()
  const { gl } = useThree()

  useFrame((state, delta) => {
    var time = clock.getElapsedTime()
    mesh.current.rotation.y += delta * 0.1
    mesh.current.rotation.z += delta * 0.1
    mesh.current.position.y = Math.sin(time * 0.1) * 10 + 2
  })

  return (
    <mesh
      ref={mesh}
      onUpdate={() => (gl.autoClear = false)}
      onClick={() => {}}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...p}
    >
      <sphereGeometry args={[1, 64, 32]} />
      <meshStandardMaterial {...texture} bumpScale={0.2} color={hovered ? "hotpink" : "white"} />
    </mesh>
  )
}
