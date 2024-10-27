import { Cylinder, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { RepeatWrapping, BoxGeometry } from "three"
import { Html } from "@react-three/drei"

const box = new BoxGeometry()

export function Cabin() {
  const thickness = 0.1
  const width = 8
  const depth = 12
  const height = 5

  const texture = useTexture(
    {
      map: "https://res.cloudinary.com/dexin8o58/image/upload/v1691169584/Textures/wood_plank_wall_diff_1k_okjryb.webp",
      // normalMap:
      //   "https://res.cloudinary.com/dexin8o58/image/upload/v1691171524/Textures/wood_plank_wall_nor_gl_1k_jgi3fq.jpg",
    },
    (texture) => {
      texture[0].wrapS = texture[0].wrapT = RepeatWrapping
      texture[0].repeat.set(2, 2)
    }
  )

  return (
    <group position={[0, 0.9, 0]}>
      <mesh
        name='floor'
        geometry={box}
        position={[0, -height / 2, 0]}
        scale={[width + thickness, thickness, depth + thickness]}
      >
        <meshPhongMaterial {...texture} shininess={0} side={2} />
      </mesh>
      <RigidBody type='fixed'>
        <mesh
          name='leftwall'
          geometry={box}
          position={[-width / 2, 0, 0]}
          scale={[thickness, height - thickness, depth + thickness]}
        >
          <meshPhongMaterial {...texture} shininess={0} side={2} />
        </mesh>
      </RigidBody>
      <RigidBody type='fixed'>
        <mesh
          name='rightwall'
          geometry={box}
          position={[width / 2, 0, 0]}
          scale={[thickness, height - thickness, depth + thickness]}
        >
          <meshPhongMaterial {...texture} shininess={0} side={2} />
        </mesh>
      </RigidBody>
      {/* <mesh
        name='frontwall'
        geometry={box}
        position={[0, 0, depth / 2]}
        scale={[width - thickness, height - thickness, thickness]}
      >
        <meshPhongMaterial {...texture} shininess={0} side={2} />
      </mesh> */}
      <RigidBody type='fixed'>
        <mesh
          name='backwall'
          geometry={box}
          position={[0, 0, -depth / 2]}
          scale={[width - thickness, height - thickness, thickness]}
        >
          <meshPhongMaterial {...texture} shininess={0} side={2} />
        </mesh>
      </RigidBody>
      <mesh
        name='leftroof'
        geometry={box}
        position={[
          -width / 4,
          height / 2 + (width * Math.sin(Math.PI * (30 / 180))) / Math.sin(Math.PI * (120 / 180)) / 3 + thickness,
          0,
        ]}
        rotation={[0, 0, 40 * (Math.PI / 180)]}
        scale={[width / 1.5 + thickness, thickness, depth]}
      >
        <meshPhongMaterial {...texture} shininess={0} side={2} />
      </mesh>
      <mesh
        name='rightroof'
        geometry={box}
        position={[
          width / 4,
          height / 2 + (width * Math.sin(Math.PI * (30 / 180))) / Math.sin(Math.PI * (120 / 180)) / 3 + thickness,
          0,
        ]}
        rotation={[0, 0, 320 * (Math.PI / 180)]}
        scale={[width / 1.5 + thickness, thickness, depth]}
      >
        <meshPhongMaterial {...texture} shininess={0} side={2} />
      </mesh>
      <Cylinder
        args={[
          (width * Math.sin(Math.PI * (30 / 180))) / Math.sin(Math.PI * (120 / 180)),
          (width * Math.sin(Math.PI * (30 / 180))) / Math.sin(Math.PI * (120 / 180)),
          thickness,
          3,
        ]}
        scale={[1, 1, 0.5]}
        position={[
          0,
          height / 2 + (width * Math.sin(Math.PI * (30 / 180))) / Math.sin(Math.PI * (120 / 180)) / 4 - thickness / 2,
          depth / 2,
        ]}
        rotation={[270 * (Math.PI / 180), 0, 0]}
      >
        <meshPhongMaterial {...texture} shininess={0} side={2} />
      </Cylinder>
      <Cylinder
        args={[
          (width * Math.sin(Math.PI * (30 / 180))) / Math.sin(Math.PI * (120 / 180)),
          (width * Math.sin(Math.PI * (30 / 180))) / Math.sin(Math.PI * (120 / 180)),
          thickness,
          3,
        ]}
        scale={[1, 1, 0.5]}
        position={[
          0,
          height / 2 + (width * Math.sin(Math.PI * (30 / 180))) / Math.sin(Math.PI * (120 / 180)) / 4 - thickness / 2,
          -depth / 2,
        ]}
        rotation={[270 * (Math.PI / 180), 0, 0]}
      >
        <meshPhongMaterial {...texture} shininess={0} side={2} />
      </Cylinder>
      <Posters width={width} height={height} depth={depth} thickness={thickness} />
    </group>
  )
}
function Posters(p) {
  return (
    <>
      <Html
        distanceFactor={2}
        position={[0, p.height / 2 + 1.1, p.depth / 2 + p.thickness]}
        rotation={[0, 0, 0]}
        zIndexRange={[2000, 0]}
        transform
        occlude='blending'
        pointerEvents='none'
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          userSelect: "none",
        }}
      >
        <img
          style={{
            filter: "contrast(1.2)",
          }}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686903135/Nfts/Screenshot_20230608-155159_Twitter_ww309n.webp'
        />
      </Html>
      <Html
        distanceFactor={2}
        position={[p.width / 2 - p.thickness, 0, -3]}
        rotation={[0, 90 * (Math.PI / 180), 0]}
        zIndexRange={[2000, 0]}
        transform
        occlude='blending'
        pointerEvents='none'
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          userSelect: "none",
        }}
      >
        <img
          style={{
            filter: "contrast(1.2)",
          }}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.webp'
        />
      </Html>
      <Html
        distanceFactor={2}
        position={[p.width / 2 - p.thickness, 0, 0]}
        rotation={[0, 90 * (Math.PI / 180), 0]}
        zIndexRange={[2000, 0]}
        transform
        occlude='blending'
        pointerEvents='none'
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          userSelect: "none",
        }}
      >
        <img
          style={{
            filter: "contrast(1.2)",
          }}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/IMG_5638_vqwa7h.webp'
        />
      </Html>
      <Html
        distanceFactor={2}
        position={[p.width / 2 - p.thickness, 0, 3]}
        rotation={[0, 90 * (Math.PI / 180), 0]}
        zIndexRange={[2000, 0]}
        transform
        occlude='blending'
        pointerEvents='none'
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          userSelect: "none",
        }}
      >
        <img
          style={{
            filter: "contrast(1.2)",
          }}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/Nfts/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.webp'
        />
      </Html>
      <Html
        distanceFactor={2}
        position={[-1.5, 0, -p.depth / 2 + p.thickness]}
        rotation={[0, 0, 0]}
        zIndexRange={[2000, 0]}
        transform
        occlude='blending'
        pointerEvents='none'
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          userSelect: "none",
        }}
      >
        <img
          style={{
            filter: "contrast(1.2)",
          }}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686903271/Nfts/FyGqUGBagAAON3q_vyfxht.webp'
        />
      </Html>
      <Html
        distanceFactor={2}
        position={[1.5, 0, -p.depth / 2 + p.thickness]}
        rotation={[0, 0, 0]}
        zIndexRange={[2000, 0]}
        transform
        occlude='blending'
        pointerEvents='none'
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          userSelect: "none",
        }}
      >
        <img
          style={{
            filter: "contrast(1.2)",
          }}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/Nfts/IMG_5661_yeamix.webp'
        />
      </Html>
    </>
  )
}
