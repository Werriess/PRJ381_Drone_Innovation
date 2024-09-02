import React, { useState } from 'react';
import '../styles.css';
import Header from "../components/Header";
import NavMenu from '../components/NavMenu';

const specs = ({children}) => {


    return(
        <div>
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
    </div>
    );
};

export default specs;