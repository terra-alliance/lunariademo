import { lazy, Suspense } from "react"
import { Physics } from "@react-three/rapier"
import { Circle } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"

import { Starfield } from "../components/Starfield"
const Moon = lazy(() => import("./Moon"))
import { Player } from "../components/Player"
import { Cabin } from "./Cabin"
import { Forest } from "./Forest"
import { Button } from "../Gui/Button"

export function LuncMonkeys() {
  const navigate = useNavigate()
  return (
    <>
      <Helmet>
        <title>LuncMonkeys</title>
        <meta property='twitter:title' content='LuncMonkeys' />
        <meta property='twitter:description' content='Welcome to LuncMonkeys.' />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/dexin8o58/image/upload/v1691183176/Screenshot_2023-08-04_16-52-47_1_dmzrnw.webp'
        />
        <meta property='og:title' content='LuncMonkeys' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dexin8o58/image/upload/v1691183176/Screenshot_2023-08-04_16-52-47_1_dmzrnw.webp'
        />
        <meta property='og:description' content='Welcome to LuncMonkeys.' />
        <meta property='og:url' content='https://lunaria3d.vercel.app/luncmonkeys' />
      </Helmet>
      <Starfield count={4000} factor={2} />
      <Physics gravity={[0, -3, 0]}>
        <RigidBody type='fixed' friction={20}>
          <Circle rotation={[270 * (Math.PI / 180), 0, 0]} args={[40, 64]} position={[0, -1.6, 0]}>
            <meshPhongMaterial shininess={0} side={2} color='saddlebrown' />
          </Circle>
        </RigidBody>
        <Player />
        <Cabin />
      </Physics>
      <Suspense>
        <Moon scale={5} position={[60, 60, -60]} />
        <pointLight color='white' distance={20} position={[60, 60, -50]} intensity={5} />
      </Suspense>
      <Lights />
      <Forest />
      <Button
        text='Go back to Lunaria'
        rotation={[0, 180 * (Math.PI / 180), 0]}
        position={[0, 0, 20]}
        size={0.5}
        opacity={0.6}
        onClick={() => navigate("/")}
      />
    </>
  )
}

function Lights() {
  return (
    <>
      <pointLight distance={15} color={0xfff5b6} position={[0, 2, 0]} intensity={5} />
      <pointLight distance={15} color={0xfff5b6} position={[8, 2, 0]} intensity={5} />
      <pointLight distance={15} color={0xfff5b6} position={[-8, 2, 0]} intensity={5} />
      <pointLight distance={15} color={0xfff5b6} position={[0, 2, 12]} intensity={5} />
      <pointLight distance={15} color={0xfff5b6} position={[0, 2, -12]} intensity={5} />
    </>
  )
}
