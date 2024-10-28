import React, { useState, useEffect } from "react";
import "../styles.css";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import LoadingScreen from "../components/loadingScreen";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Specs = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      "../src/assets/DRONE.gltf",
      (gltf) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      },
      undefined,
      (error) => {
        console.error("An error occured loading the 3D model:", error);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <section id="mainSpecs">
            <section id="models">
              <NavMenu />
              <div id="box">
                <div id="root"></div>
                {children}
              </div>
              <div id="specs">
                <div id="specsBlock">
                  <table>
                    <tbody>
                      <tr>
                        <th>Weight:</th>
                        <td>
                          Approximately 80 g (Propellers and Battery Included)
                        </td>
                      </tr>
                      <tr>
                        <th>Dimensions:</th>
                        <td>98×92.5×41 mm</td>
                      </tr>
                      <tr>
                        <th>Propeller:</th>
                        <td>3 inches</td>
                      </tr>
                      <tr>
                        <th>Built-in Functions:</th>
                        <td>
                          Range Finder, Barometer, LED, Vision System, 2.4 GHz
                          802.11n Wi-Fi, 720p Live View
                        </td>
                      </tr>
                      <tr>
                        <th>Port:</th>
                        <td>Micro USB Charging Port</td>
                      </tr>
                      <tr>
                        <th>Detachable Battery:</th>
                        <td>1.1Ah/3.8V</td>
                      </tr>
                      <tr>
                        <th>Max Flight Distance:</th>
                        <td>100m</td>
                      </tr>
                      <tr>
                        <th>Max Speed:</th>
                        <td>8m/s</td>
                      </tr>
                      <tr>
                        <th>Max Flight Time:</th>
                        <td>13min</td>
                      </tr>
                      <tr>
                        <th>Max Flight Height:</th>
                        <td>30m</td>
                      </tr>
                      <tr>
                        <th>Photo:</th>
                        <td>5MP (2592x1936)</td>
                      </tr>
                      <tr>
                        <th>FOV:</th>
                        <td>82.6°</td>
                      </tr>
                      <tr>
                        <th>Video:</th>
                        <td>HD720P30</td>
                      </tr>
                      <tr>
                        <th>Format:</th>
                        <td>JPG (Photo); MP4 (Video)</td>
                      </tr>
                      <tr>
                        <th>EIS:</th>
                        <td>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </div>
  );
};

export default Specs;
