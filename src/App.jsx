import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Suspense } from "react";
import Info from "./pages/info";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "../src/assets/brain_compressed.gltf", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
  });

  return <primitive object={gltf.scene} scale={0.4} />;
};

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
          path ="/"
          element={
            <LoginPage />
          }/>
          <Route path="/info"
          element={<Info/>}/>
        </Routes>
      </Router>
    </div>
  );
}
