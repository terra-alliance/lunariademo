import { useState } from "react"

export function Lights() {
  const [on] = useState(true)

  return (
    <>
      <pointLight distance={15} color='blue' position={[-12, 5, 0]} intensity={on ? 2 : 0} />
      <pointLight distance={15} color='hotpink' position={[-9, 5, -9]} intensity={2} />
      <pointLight distance={15} color={0xfdf29f} position={[0, 5, -12]} intensity={2} />
      <pointLight distance={15} color='blue' position={[9, 5, -9]} intensity={2} />
      <pointLight distance={15} color='hotpink' position={[12, 5, 0]} intensity={2} />
      <pointLight distance={15} color={0xfef9d1} position={[9, 5, 9]} intensity={2} />
      <pointLight distance={15} color='blue' position={[0, 5, 12]} intensity={2} />
    </>
  )
}
