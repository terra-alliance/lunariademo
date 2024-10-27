import { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { KeyboardControls, CameraControls, PointerLockControls } from "@react-three/drei"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"
import { Perf } from "r3f-perf"
import { useSetAtom } from "jotai"
import ReactNipple from "react-nipple"
import { Route, Routes } from "react-router-dom"

import { touch, joystick, lock, html } from "@/global"

import { Lunaria } from "./Lunaria/Lunaria"
import { LuncMonkeys } from "./LuncMonkeys/LuncMonkeys"
import { Gui } from "./Gui/Gui"

export function App() {
  const setJoystick = useSetAtom(joystick)

  const [crosshair, setCrosshair] = useState(false)

  document.addEventListener("pointerlockchange", function () {
    document.pointerLockElement ? setCrosshair(true) : setCrosshair(false)
  })

  return (
    <>
      {crosshair && <div className="crosshair" />}

      <html.Out />

      {touch && (
        <ReactNipple
          options={{ mode: "static", position: { top: "50%", left: "50%" } }}
          style={{
            zIndex: 16777272,
            position: "absolute",
            bottom: 175,
            left: 75,
          }}
          onMove={(evt, data) => setJoystick(data)}
          onEnd={(evt, data) => setJoystick(data)}
        />
      )}

      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "shift", keys: ["Shift"] },
        ]}
      >
        <Scene />
      </KeyboardControls>
    </>
  )
}

function Scene() {
  return (
    <>
      <Canvas style={{ background: "black" }}>
        {process.env.NODE_ENV === "development" && <Performance />}

        <Gui />

        {!touch && (
          <EffectComposer>
            <DepthOfField focusDistance={0} focalLength={10} bokehScale={5} height={200} />
          </EffectComposer>
        )}

        {touch ? <TouchControls /> : <DesktopControls />}
        <Routes>
          <Route path="/" element={<Lunaria />} />
          <Route path="/luncmonkeys" element={<LuncMonkeys />} />
        </Routes>
      </Canvas>
    </>
  )
}

function Performance() {
  const [show, setShow] = useState(false)
  window.addEventListener("keypress", (ev) => {
    if (ev.key === "`") {
      setShow(!show)
    }
  })
  return <>{show && <Perf position="bottom-right" />}</>
}

function DesktopControls() {
  const ref = useRef()
  const setLock = useSetAtom(lock)
  window.addEventListener("pointerdown", () => setLock(ref.current))
  return <PointerLockControls ref={ref} selector="#none" makeDefault />
}

var dif = [0, 0]

function TouchControls() {
  const { camera, gl, pointer } = useThree()

  const ref = useRef()

  window.addEventListener("pointerdown", () => {
    if (ref.current) dif = [ref.current.azimuthAngle + pointer.x, pointer.y - ref.current.polarAngle + Math.PI / 2]
  })

  useFrame((state, delta) => {
    ref.current.azimuthAngle = -(state.pointer.x - dif[0])
    ref.current.polarAngle = Math.PI / 2 + state.pointer.y - dif[1]
    ref.current.update(delta)
  })

  return <CameraControls ref={ref} args={[camera, gl.domElement]} />
}
