import { useEffect, useState } from 'react';
import { Tree } from 'react-d3-tree';
import treeStyle from '../styles/custom-tree.module.css';

const { treeWrapper } = treeStyle;

interface RouteTreeProps {
  info: Object; 
}

export default function RouteTree(props: RouteTreeProps): React.JSX.Element {
  const { info } = props
  const [files, setFiles] = useState<any>();

  useEffect(() => {
    setFiles(info);
  }, []);

  return (
    <div id='treeWrapper' className={treeWrapper}>
      {files && (
        <Tree
          translate={{ x: 100, y: window.innerHeight / 2 }}
          zoom={0.5}
          data={files}
          rootNodeClassName={treeStyle.node__root}
          branchNodeClassName={treeStyle.node__branch}
          leafNodeClassName={treeStyle.node__leaf}
          depthFactor={300}
        />
      )}
    </div>
  );
}
