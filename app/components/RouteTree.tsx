'use client';

import { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import '../../styles/custom-tree.css'

const getFiles = async () => {
  const response = await fetch('/api/fileParser');
  const data = await response.json();
  return data;
};

export default function RouteTree(): any {
  const [files, setFiles] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getFiles();
      setFiles(data);
    };
    getData();
  }, []);

  return (
    <div id='treeWrapper' style={{ width: '100%', height: '100%' }}>
      {files && (
        <Tree
          translate={{x:100, y:window.innerHeight/2}}
          zoom={.5}
          data={files}
          rootNodeClassName='node__root'
          branchNodeClassName='node__branch'
          leafNodeClassName='node__leaf'
          depthFactor={300}
        />
      )}
    </div>
  );
}
