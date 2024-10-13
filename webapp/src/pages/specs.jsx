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
            '../src/assets/brain_compressed.gltf',
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

    return(
        <div>
             {isLoading ? (<LoadingScreen />
            ) : (
                <>
            <Header/>
            <section id='mainSpecs'>
        <section id="models">
            <NavMenu/>
        
            <div id="box">
                <div id="root"></div>
                {children}
            </div>
        </section>
        <section id="bottom">
            <div id="specs"></div>
        </section>
    </section>
    </>
            )}
    </div>
    );
};

export default Specs;