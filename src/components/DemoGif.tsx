// import tableGif from '';
// import treeGif from '';
// import  from '';

interface DemoGifProps {
  gif: number;
}

const DemoGif = (props: DemoGifProps) => {
  const gifs = [tableGif, treeGif];
  const { gif } = props;
  return (
    <div>
      <img src={gifs[gif]}></img>
    </div>
  );
};

export default DemoGif;
