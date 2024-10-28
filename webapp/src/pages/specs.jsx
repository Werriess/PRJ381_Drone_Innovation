import React, { useState, useEffect } from 'react';
import '../styles.css';
import Header from "../components/Header";
import NavMenu from '../components/NavMenu';
import LoadingScreen from "../components/loadingScreen";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Specs = ({children}) => {
    
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loader = new GLTFLoader();
        
        loader.load(
            '../src/assets/DRONE.gltf',
            (gltf) => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            },
            undefined,
            (error) => {
                console.error('An error occured loading the 3D model:', error);
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
              </section>
              <section id="bottom">
                <div id="specs">
                  <div>
                    <h1>Weight:</h1> Approximately 80 g (Propellers and Battery Included)
                    <br></br>
                    <h1>Dimensions:</h1> 98×92.5×41 mm 
                    <br></br><h1>Propeller:</h1> 3 inches{" "}
                    <br></br><h1>Built-in Functions:</h1> Range Finder, Barometer, LED,
                    Vision System, 2.4 GHz 802.11n Wi-Fi, 720p Live View{" "}
                    <br></br>
                    <h1>Port:</h1> Micro USB Charging Port
                    <br></br>
                    <h1>Detachable Battery:</h1> 1.1Ah/3.8V
                  </div>
                  <div>
                  <h1>Max Flight Distance:</h1> 100m<br></br>
                  <h1> Max Speed:</h1> 8m/s<br></br>
                  <h1>Max Flight Time:</h1> 13min<br></br>
                  <h1>Max Flight Height:</h1> 30m
                  </div>
                  <div>
                  <h1>Photo:</h1> 5MP (2592x1936)<br></br>
                  <h1>FOV:</h1> 82.6°<br></br>
                  <h1>Video:</h1> HD720P30<br></br>
                  <h1>Format</h1> JPG(Photo); MP4(Video)<br></br>
                  <h1>EIS:</h1> Yes
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