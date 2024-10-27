import { useState, useEffect } from "react"
import { useAtomValue } from "jotai"
import { useThree } from "@react-three/fiber"
import { OrthographicCamera, Hud } from "@react-three/drei"
// import { OrbitControls } from "@react-three/drei"
import { useLocation } from "react-router-dom"

import { ui, touch, lock, audio, submenu } from "@/global"

import { Button } from "./Button"
import { Wallet } from "./Wallet"

export function Gui() {
  return (
    <Hud renderPriority={touch ? 1 : 2}>
      <OrthographicCamera makeDefault position={[0, 0, 1000]} />
      <ambientLight intensity={1} />
      <pointLight position={[100, 100, 100]} intensity={2} />
      <Main />
      <ui.Out />
      {/* <OrbitControls /> */}
    </Hud>
  )
}

function Main() {
  const { size } = useThree()
  const controls = useAtomValue(lock)
  const menu = useAtomValue(submenu)
  const [enter, setEnter] = useState(!touch)
  const [welcome, setWelcome] = useState(true)

  const location = useLocation()
  console.log(location.pathname)

  useEffect(() => {
    document.addEventListener("pointerlockchange", function () {
      document.pointerLockElement ? setEnter(false) : setEnter(true)
    })
    window.addEventListener("touchstart", function () {
      setWelcome(false)
      audio.play()
    })
  }, [])

  return (
    <>
      {enter && !menu && (
        <>
          <Button capsule={false} text="welcome to lunaria" position={[0, size.height / 2 - 200, 0]} size={55} />
          <Button
            onClick={(e) => {
              controls.lock()
              setTimeout(() => {
                setEnter(!document.pointerLockElement)
                if (document.pointerLockElement) audio.play()
              }, 50)
              e.stopPropagation()
            }}
            text="Enter"
            position={[0, 0, 0]}
            size={45}
          />
        </>
      )}
      {touch && welcome && <Button capsule={false} text="welcome to lunaria" position={[0, size.height / 2 - 250, 0]} size={30} />}
      {!touch && <Button text="Inventory" position={[size.width / 2 - size.width + 150, size.height / 2 - 60, 0]} size={40} />}
      <Connect size={size} />
    </>
  )
}

export function Connect({ size }) {
  return (
    <>
      {!touch && (
        <>
          <Button text={"Connect"} position={[size.width / 2 - 220, size.height / 2 - 60, 0]} size={40} />
          <Button text="Lunc: 0" position={[size.width / 2 - 230, size.height / 2 - 140, 0]} size={40} />
          <Button text="Ustc: 0" position={[size.width / 2 - 230, size.height / 2 - 210, 0]} size={40} />
        </>
      )}

      <Wallet animate position={[size.width / 2 - 40, size.height / 2 - 60, 0]} />
    </>
  )
}
