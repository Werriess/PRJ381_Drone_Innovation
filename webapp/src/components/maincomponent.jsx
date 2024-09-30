import React from 'react';
import NavMenu from './navmenu';
import "../styles.css";

function MainContent() {
  return (
    <div id='overlay'>
      <div id='main'>
            <NavMenu />
        <section id='content'>
          <h1>Our Mission:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod a dolorum perferendis nulla corrupti aspernatur voluptates, quas expedita veritatis sint quasi! Nisi ipsa enim harum nihil beatae. Cum, itaque!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi repudiandae fugit provident suscipit, saepe, sunt magnam nobis, similique qui voluptatum id nam! Nulla qui impedit fuga deserunt ducimus, ratione harum.
            </p>
        </section>
      </div>
    </div>
  );
}

export default MainContent;
