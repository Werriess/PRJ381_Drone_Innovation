import React, { useState } from "react";
import "../styles.css";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import StatsBars from "../components/statsBars";

const Stats = () => {
  return (
    <div>
      <Header />
      <section id="models">
        <NavMenu />
        <div id="settingBox">
          <div id="setOne">
            <section className="sett">
              Stat1
              <StatsBars />
            </section>
            <section className="sett">
              Stat2
              <StatsBars />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
