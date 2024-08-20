import React from 'react';
import NavMenu from './NavMenu';
import "../styles.css";

function MainContent() {
  return (
    <div id='main'>
        <section>
            <NavMenu />
        </section>
        <section>
            <div id="box">

            </div>
        </section>
    </div>
  );
}

export default MainContent;
