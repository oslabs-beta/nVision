'use client';

import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridColumnVisibilityModel } from '@mui/x-data-grid';
import useWebSocket from 'react-use-websocket';
import Tree from 'react-d3-tree';
import '../../styles/globals.css';
// import Tree from './';

const wsURL = 'ws://localhost:8080';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Trace Id', width: 90 },
  {
    field: 'url',
    headerName: 'Route / URL',
    width: 300,
    editable: true,
  },
  {
    field: 'fetchKind',
    headerName: 'Fetched From',
    width: 150,
    editable: true,
  },
  {
    field: 'method',
    headerName: 'Method',
    width: 125,
    editable: true,
  },
  {
    field: 'statusCode',
    headerName: 'Status Code',
    width: 125,
    editable: true,
  },
  {
    field: 'duration',
    headerName: 'Duration',
    type: 'number',
    width: 100,
  }
  // {
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const getFiles = async () => {
  const response = await fetch('/api/fileParser');
  const data = await response.json();
  return data;
};

export default function DataGridDemo(): any {
  const [spans, setSpans] = useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>({
      id: false,
  });
  
  // --------WebSockets--------
  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(wsURL, {
    onOpen: () => console.log('opened'),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });
  // useEffect(() => {
  //   const ws = new WebSocket(wsURL);
  //   ws.onopen = () => {
  //     console.log('Connected to socket');
  //   };
  //   // on close we should update connection state
  //   // and retry connection
  //   ws.onclose = () => {
  //     console.log('connection lost');
  //   };
  //   // terminate connection on unmount
  //   return () => {
  //     ws.close();
  //   };
  //   // retry dependency here triggers the connection attempt
  // }, []);

  const fetchSpans = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/getSpans', {
        mode: 'no-cors',
        cache: 'no-store'
      });
      const data = await res.json();
      // console.log(data); 
      if (data.traces.length > 0) {
        setSpans(data.traces)
      }
    } catch (err) {
      console.error(err)
    }
  }
  fetchSpans();

  // useEffect(() => {
  //   fetchSpans()
  // }, [spans])

  return (
    <div>
      <button onClick={() => setTab(true)}>Table</button>
      <button onClick={() => setTab(false)}>Tree</button>
      {
    tab ? (<div className=' bg-gray-300[.4] flex flex-col justify-center content-center box-content p-4 mt-7 border-4'>
      <div className='flex justify-center'>
        <h2 className='mt-5 mb-2 text-2xl font-bold text-center'>Network Activity</h2>
      </div>
      <div className='flex justify-end'>
        <Box sx={{ height: '60vh', width: '80vw', bgcolor: 'rgba(75,85,99,.2)' }}>
          <DataGrid
            columnVisibilityModel={columnVisibilityModel}
            sx={{ color: 'rgb(75,85,99)', m: 2 }}
            rows={spans}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>)
    :
    (<div id='treeWrapper' style={{ width: '50vw', height: '50vh' }}>
        {files && <Tree data={files} />}
    </div>)
    }
    </div>
  );
}
