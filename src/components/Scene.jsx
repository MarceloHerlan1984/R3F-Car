import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"
import Track from "./Track"

import Car from "./Car"
import Ground from "./Ground"

function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment files={"/textures/envmap.hdr"} background={"both"} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[-6, 1.9, 6.21]} fov={40} />
      <Track />
      <Ground />
      <Car />
    </Suspense>
  )
}

export default Scene
