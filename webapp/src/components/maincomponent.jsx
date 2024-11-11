import React from 'react';
import NavMenu from './NavMenu';
import "../styles.css";

function MainContent() {
  return (
    <div id='overlay'>
      <div id='main'>
            <NavMenu />
        <section id='content'>
          <h1>Our Mission:</h1>
            <p>Embarking on the drone project for gas sensing in mining environments is a pioneering leap toward ensuring safety and sustainability in one of the world's most hazardous industries. Mining operations are often plagued by the presence of toxic gases that pose significant risks to miners' health and safety. Integrating drone technology with advanced gas sensing capabilities offers a transformative solution, enabling real-time monitoring and early detection of harmful gases, which traditional methods might miss. This initiative not only enhances safety measures by providing timely alerts and reducing the need for human entry into dangerous zones but also streamlines operations, making them more efficient and cost-effective. By leveraging cutting-edge technology, this project underscores a commitment to innovation and demonstrates how technological advancements can drive substantial improvements in worker safety and environmental management in mining environments.
            </p>
            <p>
              The Gas Scout can sense the following gasses:
              <ul>
                <li>Carbon Monoxide (CO)</li>
              </ul>
            </p>
            <p>
              Meet The Team:
              <ul id="team">
                <li><img/><h3>Xander Glanninger</h3></li>
                <li><img/><h3>Willem Paton</h3></li>
                <li><img/><h3>Wian van Niekerk</h3></li>
                <li><img/><h3>Wian Joubert</h3></li>
                <li><img/><h3>Werner Janse van Rensburg</h3></li>
                <li><img/><h3>Zeldene van Vüren</h3></li>
              </ul>
            </p>
        </section>
      </div>
    </div>
  );
}

export default MainContent;
