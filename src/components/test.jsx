import '../scripts/displacement-shader.js';

const Test = ({ position = '0 0 0' }) => {
  return (
    <>
      <a-sphere material="shader:displacement" scale="20 20 20" radius="0.2" position={position} segments-height="128" segments-width="128">
        <a-animation attribute="scale" direction="alternate-reverse" dur="5000" from="1 1 1" to="4 4 4" repeat="indefinite"></a-animation>
      </a-sphere>
      <a-box color="#CCC" width="3" depth="3" height="0.1" position="0 0 -2"></a-box>
    </>
  );
};

export default Test;
