import React, { useState } from 'react';
import '../styles.css';
import Header from "../components/Header";
import NavMenu from '../components/NavMenu';
import SettingBars from '../components/settingBars';
import CheckBox from '../components/checkBox';

const Settings = () => {
    return(
        <div>
            <Header/>
        <section id="settings">
            <NavMenu/>
            <div id="settingBox">
            <div id="setOne">
                <section className="sett">
                    Setting1
                    <SettingBars />
             </section>
             <section className="sett">
                Setting2
                <SettingBars/>
             </section>
            </div>
            <div id="setTwo">
                <section class="sett2">
                    <div>Check1 <CheckBox/></div>
                    <div>Check2 <CheckBox/></div>
                </section>
                <section class="sett2">
                <div>Check3 <CheckBox/></div>
                <div>Check4 <CheckBox/></div>
                </section>
            </div>
            </div>
	</section>
     </div>
    );
};

export default Settings;