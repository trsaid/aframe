import sky from '../models/sky2.png';

const Sky = () => {
  return (
    <>
      <a-assets>
        <img id="sky" src={sky} alt="" />
      </a-assets>

      <a-sky color="FFFFFF" material="src:#sky" rotation="0 0 0"></a-sky>
    </>
  );
};

export default Sky;
