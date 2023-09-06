import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ball from '../models/ball.glb';

const Ball = () => {
  const loader = new GLTFLoader();

  loader.load(ball, d => {
    const entity = document.getElementById('ball');
    entity.object3D.add(d.scene);

    setInterval(() => {
      entity.emit('bounce');
      setTimeout(() => {
        entity.emit('return');
      }, 800);
    }, 1600);
  });
  return (
    <a-entity
      id="ball"
      position="0 3 0"
      scale="2 2 2"
      animation__bounce="property: position; to: 0 7 0; dur: 800; easing: easeOutQuad; startEvents: bounce"
      animation__return="property: position; to: 0 3 0; dur: 800; easing: easeInQuad; startEvents: return"
    ></a-entity>
  );
};

export default Ball;
