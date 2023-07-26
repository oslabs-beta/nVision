import tableGif from '../assets/table.gif';
// import treeGif from '';
import { Accessor } from 'solid-js';

interface DemoGifProps {
  gif: Accessor<number>;
}

const DemoGif = (props: DemoGifProps) => {
  const gifs = [tableGif];
  const { gif } = props;
  return (
    <div>
      <h2> GIF: {gif()}</h2>
      <img src={gifs[gif()]} />
      {/* <img src={gifs[gif]}></img> */}
    </div>
  );
};

export default DemoGif;
