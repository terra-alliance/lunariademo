import { useRef, useState } from "react"
import { useAtomValue, useAtom } from "jotai"
import { useFrame } from "@react-three/fiber"
import { Html, RoundedBox } from "@react-three/drei"
import { ui, html, lock, submenu } from "@/global"
import { Button } from "../Gui/Button"

export default function Hallway() {
  return (
    <>
      <Images />
    </>
  )
}

const urls = [
  "v1690662801/image_1_mfv2i1",
  "v1688402146/Nfts/F0HwlQXXgAAa1bw_u6dhgo",
  "v1688310760/Nfts/imageonline-co-watermarkedimage_5_ynvlsv",
  "v1688310761/Nfts/imageonline-co-watermarkedimage_7_ijveha",
  "v1688310761/Nfts/imageonline-co-watermarkedimage_6_epmcj9",
  "v1688310760/Nfts/imageonline-co-watermarkedimage_4_ud1onj",
  "v1688310760/Nfts/imageonline-co-watermarkedimage_9_xgwk6t",
  "v1688310761/Nfts/imageonline-co-watermarkedimage_8_nkmfbk",
  "v1688310762/Nfts/imageonline-co-watermarkedimage_11_dzelcj",
  "v1688310761/Nfts/imageonline-co-watermarkedimage_12_a6jpic",
  "v1687057979/Nfts/revival_iilit9",
  "v1686904474/Nfts/Fg2oTqhWQAIXEmk_xylcip",
  "v1686904436/Nfts/FgrgsABXkAMnxoG_skxqik",
  "v1685218397/Nfts/FjLR2_eXEAAbI2J_os2zlu",
  "v1686903850/Nfts/FhJkCVmXoAAx0aO_ge7dvx",
  "v1685218541/Nfts/FgKEctFWIAAyFFc_fudqvi",
  "v1686902344/Nfts/rebels_016_dusqpi",
  "v1687547914/Nfts/Griftlands_LUNC_L1_mfkx8x",
  "v1687563135/Nfts/1673579936098174_p46kde",
  "v1687563137/Nfts/Zaradar_Quantum_Mint_Mania_t5iub8",
  "v1687563130/Nfts/Zaradar_KungFu_Panda_cs2nod",
  "v1687563141/Nfts/Dear_Leader_Chairman_Ed_Kim_bgnqyn",
  "v1687563127/Nfts/Toby__Ed_raping_LUNC_ccoqoj",
  "v1687563109/Nfts/53c1fd6215e37ebc8c6aebd00d3e89e03254c0dc_kudkj4",
  "v1687563111/Nfts/7b1e48ee9de00a1cb12f09d8093e6637486165fd_hjputw",
  "v1685998057/Nfts/snake_gccjdp",
  "v1685998056/Nfts/got_lunc_oo6kot",
  "v1685998057/Nfts/Lunc_for_his_and_her_pleasure_Final_p5u5jd",
  "v1685998056/Nfts/got_lunc_2_puf4la",
  "v1686902417/Nfts/try_lunc_today_final_yn2pq0",
  "v1686902421/Nfts/Lunc_Miracle_Tonic_Final_hac9b0",
  "v16862703135/Nfts/Screenshot_20230608-155159_Twitter_ww309n",
  "v16862703268/Nfts/FyGetU5XsAILt4b_k1jmz9",
  "v1686903271/Nfts/FyGqUGBagAAON3q_vyfxht",
  "v1686903275/Nfts/Fyl3M0kWYAwebnS_xgsspd",
  "v1676239383/Nfts/5B758959-5682-4A83-AA20-A429C53AF854_exp9da",
  "v1676239388/Nfts/IMG_5638_vqwa7h",
  "v1676239389/Nfts/IMG_5667_fhvrbt",
  "v1676239388/Nfts/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz",
  "v1688018385/simplelady25_n2mznk",
  "v1688018667/simplelady22_zu4ofc",
  "v1688018411/simplelady24_dxghcp",
  "v1688018385/simplelady25_n2mznk",
  "v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "v1688326028/Nfts/IMG_7473_kcoqi8",
  "v1688326031/Nfts/IMG_0139_1_d9u78i",
  "v1688326033/Nfts/coming-soon_ynyj87",
  "v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
]

function Images() {
  const array1 = []
  const array2 = []

  for (let i = 0; i < urls.length; i++) {
    array1.push(
      <Image
        angle={i * (360 / urls.length)}
        height={0}
        imageAngle={270}
        distance={19}
        src={urls[i]}
        size='300px'
        text='Lunaria'
        key={i}
      />
    )
  }

  const group = useRef()

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.1
  })

  // for (let i = 0; i < urls.length / 4; i++) {
  //   array2.push(
  //     <Image
  //       angle={i * (1350 / urls.length)}
  //       height={0}
  //       imageAngle={90}
  //       distance={8}
  //       src={urls[i]}
  //       size='300px'
  //       text={null}
  //       key={i}
  //     />
  //   )
  // }
  return (
    <>
      {array1}
      <group ref={group} rotation={[0, 10 * (Math.PI / 180), 0]}>
        {array2}
      </group>
    </>
  )
}

function Image(p) {
  const controls = useAtomValue(lock)
  const [hovered, hover] = useState(false)
  const [smenu, setSmenu] = useAtom(submenu)
  const [menu, setMenu] = useState(false)
  return (
    <>
      <group
        position={[
          Math.cos(p.angle * (Math.PI / 180)) * p.distance,
          p.height,
          Math.sin(p.angle * (Math.PI / 180)) * p.distance,
        ]}
        rotation={[0, -p.angle * (Math.PI / 180), 0]}
      >
        <Html
          distanceFactor={2}
          rotation={[0, p.imageAngle * (Math.PI / 180), 0]}
          transform
          zIndexRange={[2000, 0]}
          occlude='blending'
          pointerEvents='none'
          style={{
            width: p.size,
            height: p.size,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            userSelect: "none",
          }}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          onClick={(e) => {
            if (!smenu) setMenu(true)
            setSmenu(true)
            controls.unlock()
            e.stopPropagation()
          }}
        >
          <img
            style={{
              filter: "contrast(1.2)",
            }}
            src={"https://res.cloudinary.com/dexin8o58/image/upload/" + p.src + ".webp"}
          />
          {hovered && (
            <>
              <p style={{ position: "absolute", bottom: "300px", fontFamily: "Jura", color: "#fdf29f", fontSize: 30 }}>
                {p.text}
              </p>
              <p style={{ position: "absolute", top: "300px", fontFamily: "Jura", color: "#fdf29f", fontSize: 30 }}>
                {p.text}
              </p>
            </>
          )}
        </Html>
      </group>
      {menu && (
        <ui.In>
          <>
            <html.In>
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "black",
                  zIndex: 2000,
                  top: 200,
                  right: 250,
                  borderRadius: 40,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                <img
                  style={{
                    filter: "contrast(1.2)",
                    borderRadius: 40,
                  }}
                  src={"https://res.cloudinary.com/dexin8o58/image/upload/" + p.src + ".webp"}
                />
              </div>
            </html.In>
            <RoundedBox position={[0, 0, -101]} args={[1700, 750, 200]} radius={90}>
              <meshNormalMaterial color='blue' transparent='true' opacity={0.3} />
            </RoundedBox>
            <Button capsule={true} text={"Nft"} position={[0, 300, 0]} size={55} />
            <Button capsule={true} text={"Name:"} position={[-600, 200, 0]} size={55} />
            <Button capsule={true} text={"Owner:"} position={[-600, 100, 0]} size={55} />
            <Button capsule={true} text={"Price:"} position={[-600, 0, 0]} size={55} />
            <Button
              onClick={(e) => {
                setSmenu(false)
                setMenu(false)
                controls.lock()
                // setTimeout(() => {
                //   setEnter(!document.pointerLockElement)
                //   if (document.pointerLockElement) audio.play()
                // }, 50)
                e.stopPropagation()
              }}
              text='X'
              position={[750, 300, 0]}
              size={45}
            />
          </>
        </ui.In>
      )}
    </>
  )
}

// function Text({ text, pos, rot }) {
//   return (
//     <Html position={pos} rotation={rot} transform pointerEvents='none'>
//       <p
//         style={{
//           fontSize: "5px",
//           color: "#fdf29f",
//         }}
//       >
//         {text}
//       </p>
//     </Html>
//   )
// }
