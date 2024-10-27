import { Merged } from "@react-three/drei"
import { ConeGeometry, CylinderGeometry, MeshPhongMaterial, Mesh } from "three"

const material = new MeshPhongMaterial({ shininess: 0 })

let Trees = []
for (let i = 0; i < 100; i++) {
  const x = Math.random() * 40 - 20
  const z = Math.random() * 40 - 20
  if ((x < -6 || x > 6) && (z < -6 || z > 6)) {
    Trees.push([x, z])
  }
}

export function Forest() {
  return (
    <Merged
      meshes={[new Mesh(new ConeGeometry(1, 1, 6), material), new Mesh(new CylinderGeometry(0.3, 0.3, 3.2), material)]}
    >
      {(Cone, Trunk) => (
        <>
          {Trees.map((p, i) => (
            <Tree position={[p[0], 0, p[1]]} Cone={Cone} Trunk={Trunk} key={i} />
          ))}
        </>
      )}
    </Merged>
  )
}

function Tree(p) {
  return (
    <group position={p.position}>
      <p.Cone position={[0, 0, 0]} scale={1.8} color='green' />
      <p.Cone position={[0, 0.5, 0]} scale={1.6} color='green' />
      <p.Cone position={[0, 1, 0]} scale={1.4} color='green' />
      <p.Cone position={[0, 1.5, 0]} scale={1.2} color='green' />
      <p.Cone position={[0, 2, 0]} scale={1} color='green' />
      <p.Cone position={[0, 2.5, 0]} scale={0.8} color='green' />
      <p.Trunk position={[0, 0, 0]} scale={1} color='saddlebrown' />
    </group>
  )
}
