'use client';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';
import useWebSocket from 'react-use-websocket';
import '../../styles/globals.css';
import RouteTree from '../components/RouteTree';

const wsURL = 'ws://localhost:8080';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Trace Id', width: 90 },
  {
    field: 'url',
    headerName: 'Route / URL',
    width: 350,
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
    headerName: 'Duration (ms)',
    type: 'number',
    width: 100,
  },
  // {
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

export default function DataGridDemo(): any {
  const [tab, setTab] = React.useState('table');
  const [spans, setSpans] = useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>({
      id: false,
    });

  // --------WebSockets--------
  // const {
  //   sendMessage,
  //   sendJsonMessage,
  //   lastMessage,
  //   lastJsonMessage,
  //   readyState,
  //   getWebSocket,
  // } = useWebSocket(wsURL, {
  //   onOpen: () => console.log('opened'),
  //   //Will attempt to reconnect on all close events, such as server shutting down
  //   shouldReconnect: (closeEvent) => true,
  // });

  // ----------Alternate WebSockets-----------
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
        cache: 'no-store',
      });
      const data = await res.json();
      // console.log(data);
      if (data.traces.length > 0) {
        setSpans(data.traces);
      }
    } catch (err) {
      console.error(err);
    }
  };
  fetchSpans();

  return (
    <div className='h-screen'>
      <button className={tab === 'table' ? 'btn  bg-gray-300' : 'btn'} onClick={() => setTab('table')}>Table</button>
      <button className={tab === 'tree' ? 'btn ml-1 bg-gray-300' : 'btn ml-1'} onClick={() => setTab('tree')}>Tree</button>
      {tab === 'table' ? (
        <div className='bg-gray-300[.4] flex flex-col justify-center content-center box-content p-6 border-4'>
          <div className='flex justify-center'>
            <h2 className='mt-5 mb-2 text-2xl font-bold text-center'>
              Network Activity
            </h2>
          </div>
          <div className='flex justify-end p-4'>
            <Box
              sx={{
                height: '70vh',
                width: '70vw',
                bgcolor: 'rgba(75,85,99,.5)',
                padding: '24px',
                paddingBottom: '40px',
              }}
            >
              <DataGrid
                columnVisibilityModel={columnVisibilityModel}
                sx={{ color: 'white', m: 2 }}
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
        </div>
      ) : (
        <div className='bg-gray-300[.4] flex flex-col justify-center content-center box-content border-4 h-[80vh] w-[70vw]'>
          <RouteTree />
        </div>
      )}
    </div>
  );
}
