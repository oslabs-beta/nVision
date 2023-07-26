import { useEffect, useState } from 'react';
import styles from '../styles/custom-tree.module.css';
import { Tree } from 'react-d3-tree';

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
    <div id='treeWrapper' style={{ width: '100%', height: '100%' }}>
      {files && (
        <Tree
          translate={{ x: 100, y: window.innerHeight / 2 }}
          zoom={0.5}
          data={files}
          rootNodeClassName={styles.node__root}
          branchNodeClassName={styles.node__branch}
          leafNodeClassName={styles.node__leaf}
          depthFactor={300}
        />
      )}
    </div>
  );
}
