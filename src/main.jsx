import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import "./index.css"
import Scene from "./components/Scene"
import { Physics } from "@react-three/cannon"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas>
    <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
      <Scene />
    </Physics>
  </Canvas>,
)
