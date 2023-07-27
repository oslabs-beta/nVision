import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from '../styles/global.module.css'

interface tableProps {
  trace: object[];
}

const { grid } = styles;

//creating columns for table
const columns: GridColDef[] = [
  {
    field: 'url',
    headerName: 'Route/URL',
    minWidth: 250,
    flex: 1
  },
  {
    field: 'statusCode',
    headerName: 'Status Code',
    width: 105,
    editable: true,
  },
  {
    field: 'method',
    headerName: 'Method',
    width: 105,
    editable: true,
  },
  {
    field: 'fetchKind',
    headerName: 'Fetched From',
    width: 110,
    editable: true,
  },
  {
    field: 'duration',
    headerName: 'Duration (ms)',
    width: 110,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 110,
    editable: true,
  },
];

export default function Table(props: tableProps):React.JSX.Element {
  const { trace } = props;

  return (
    <div className={grid}>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          bgcolor: 'rgba(75,85,99,.5)',
          padding: '24px',
          paddingBottom: '40px',
        }}
      >
        <DataGrid
          sx={{ color: 'white', m: 2 }}
          rows={trace}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
