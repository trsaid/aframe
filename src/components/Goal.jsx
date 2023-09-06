import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import goal from '../models/goal.glb';

const Goal = ({ id, position = '0 0 0', rotation = '0 0 0' }) => {
  const loader = new GLTFLoader();

  loader.load(goal, d => {
    const entity = document.getElementById(id);
    entity.object3D.add(d.scene);
  });

  return <a-entity id={id} position={position} scale="3 4 3" rotation={rotation}></a-entity>;
};

export default Goal;
