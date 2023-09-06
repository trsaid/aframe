import React from 'react';
import 'aframe';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import stadium from './models/stadium.jpeg';
import universe from './models/vaporwave_mountains.glb';
import said from './models/said.glb';
import erwann from './models/erwann.glb';
import Test from './components/test';

import Ball from './components/Ball';
import Sky from './components/Sky';
import Goal from './components/Goal';

const App = () => {
  const loader = new GLTFLoader();
  loader.load(universe, d => {
    const entity = document.getElementById('universe');
    entity.object3D.add(d.scene);
  });

  loader.load(said, d => {
    const entity = document.getElementById('said');
    entity.object3D.add(d.scene);
  });

  loader.load(erwann, d => {
    const entity = document.getElementById('erwann');
    entity.object3D.add(d.scene);
  });

  return (
    <a-scene>
      <a-assets>
        <img id="stadium" src={stadium} alt="" />
      </a-assets>

      <a-camera position="0 20 0" rotation="0 0 0"></a-camera>

      {/* <a-entity rotation="0 0 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
        <a-sphere position="5 0 0" color="mediumseagreen"></a-sphere>
      </a-entity> */}

      <Ball />
      <Goal id="goal-1" position="-40 1 0" rotation="0 90" />
      <Goal id="goal-2" position="40 1 0" rotation="0 -90" />

      <a-box position="0 0 0" width="100" height="2" depth="50" material="src: url(/stadium.jpeg)"></a-box>

      <a-entity id="said" position="-30 1 0" scale="5 5 5" rotation="0 90"></a-entity>
      <a-entity id="erwann" position="30 1 0" scale="5 5 5" rotation="0 -90"></a-entity>

      <Sky />
      <a-entity id="universe" position="0 0 0" scale="15 15 15"></a-entity>
      <Test  position='-45 5 20'/>
      <Test  position='-45 5 -20'/>
      <Test  position='45 5 20'/>
      <Test  position='45 5 -20'/>
    </a-scene>
  );
};

export default App;
