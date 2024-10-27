import { lazy, Suspense } from "react"
import { Physics } from "@react-three/rapier"
import { Ring, Cylinder } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

import { Starfield } from "../components/Starfield"
import Hallway from "./Hallway"
const Moon = lazy(() => import("./Moon"))
import { Lights } from "./Lights"
import { Player } from "../components/Player"

export function Lunaria() {
  return (
    <>
      <Starfield count={4000} factor={2} />
      <Physics gravity={[0, -3, 0]}>
        <RigidBody type='fixed' friction={20}>
          <Ring rotation={[270 * (Math.PI / 180), 0, 0]} args={[10, 15, 64]} position={[0, -1.6, 0]}>
            <meshPhongMaterial shininess={0} side={2} />
          </Ring>
        </RigidBody>

        <Ring rotation={[270 * (Math.PI / 180), 0, 0]} args={[10, 15, 64]} position={[0, 1.6, 0]}>
          <meshPhongMaterial shininess={0} side={2} />
        </Ring>

        <RigidBody colliders='trimesh' type='fixed' friction={1}>
          <Cylinder args={[15.5, 15.5, 0.1, 64, 1, true]} position={[0, -1, 0]}>
            <meshPhongMaterial side={2} shininess={0} />
          </Cylinder>
        </RigidBody>

        <Cylinder args={[15.5, 15.5, 0.1, 64, 1, true]} position={[0, 1, 0]}>
          <meshPhongMaterial side={2} shininess={0} />
        </Cylinder>

        <RigidBody colliders='trimesh' type='fixed' friction={1}>
          <Cylinder args={[9.5, 9.5, 0.1, 64, 1, true]} position={[0, -1, 0]}>
            <meshPhongMaterial side={2} shininess={0} />
          </Cylinder>
        </RigidBody>

        <Player />
      </Physics>
      <Suspense>
        <Moon scale={5} />
        <pointLight color='hotpink' distance={20} position={[0, -10, 0]} intensity={2} />
      </Suspense>
      <Hallway />
      <Lights />
    </>
  )
}
