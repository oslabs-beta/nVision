// import tableGif from '';
// import treeGif from '';
import test1 from '../assets/Bennett.png';
import test2 from '../assets/DarkIsaac.png';
import { Accessor } from 'solid-js';

interface DemoGifProps {
  gif: Accessor<number>;
}

const DemoGif = (props: DemoGifProps) => {
  //   const gifs = [tableGif, treeGif];
  const tests = [test1, test2];
  const { gif } = props;
  return (
    <div>
      <h2> GIF: {gif()}</h2>
      <img src={tests[gif()]} />
      {/* <img src={gifs[gif]}></img> */}
    </div>
  );
};

export default DemoGif;
