import { useState, useEffect } from "react"
import { Text } from "@react-three/drei"
import { useGesture } from "@use-gesture/react"

export function Button({
  position = [0, 0, 0],
  onClick,
  drag,
  text,
  size = 0.2,
  rotation = [0, 0, 0],
  visible,
  font = "./JuraBook.ttf",
  capsule = true,
  opacity = 0.2,
}) {
  const [hovered, setHover] = useState(false)
  const [width, setWidth] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  const bind = useGesture({
    onDrag: ({ event, offset: [x, y] }) => {
      event.stopPropagation()
      setX(x)
      setY(-y)
    },
    onDragStart: () => {},
    onDragEnd: () => {},
  })

  return (
    <group visible={visible}>
      <Text
        rotation={rotation}
        position={[position[0] + x, position[1] + y, position[2]]}
        font={font}
        fontSize={size}
        color={0xfdf29f}
        onSync={(text) => setWidth(text.geometry.boundingBox.max.x * 2)}
      >
        {text}
      </Text>
      {capsule && (
        <mesh
          position={[position[0] + x, position[1] + y, position[2]]}
          onClick={() => onClick()}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          rotation={[rotation[0], rotation[1], rotation[2] + 90 * (Math.PI / 180)]}
          {...(drag && bind())}
        >
          <capsuleGeometry args={[size * 0.7, width, 10, 10]} />
          <meshStandardMaterial
            color='darkblue'
            transparent='true'
            opacity={hovered ? opacity / 2 : opacity}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  )
}
