import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import ProtectedRoute from "../components/protectedRoute";
import Login from "../pages/login";
import Info from "../pages/info";
import Settings from "../pages/settings";
import Stats from "../pages/stats";
import Specs from "../pages/specs";
import Register from "../pages/register";

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "../src/assets/brain_compressed.gltf", (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    });
  
    return <primitive object={gltf.scene} scale={0.4} />;
  };

const getAccessToken = () => {
  return Cookies.get("accessToken");
};

const isAuthenticated = () => {
  return !!getAccessToken();
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true,
  },
  {
    path: "/register",
    element: <Register/>,
    index: true,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/specs",
        element: (
          <Specs>
            <Canvas>
              <Suspense fallback={null}>
                <Model />
                <OrbitControls />
                <Environment preset="forest" background />
              </Suspense>
            </Canvas>
          </Specs>
        ),
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default Router;
