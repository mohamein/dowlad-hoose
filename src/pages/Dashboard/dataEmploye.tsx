'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type {  GridColDef } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Example static JSON data
const exampleUserData = [
  {
    user_id: 1,
    full_name: 'Amina Ali',
    phone: '+252612345678',
    email: 'amina@example.com',
    title: 'HR Manager',
    dagmo: 'Hodan',
  },
  {
    user_id: 2,
    full_name: 'Yusuf Mohamed',
    phone: '+252615432109',
    email: 'yusuf@example.com',
    title: 'Sales Lead',
    dagmo: 'Wadajir',
  },
  {
    user_id: 3,
    full_name: 'Zahra Omar',
    phone: '+252618765432',
    email: 'zahra@example.com',
    title: 'IT Officer',
    dagmo: 'Hamarweyne',
  },
];

// Define the table columns
const columns: GridColDef[] = [
  { field: 'user_id', headerName: 'ID', width: 80 },
  { field: 'full_name', headerName: 'Employee Name', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 160 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'title', headerName: 'Title', width: 180 },
  { field: 'dagmo', headerName: 'Dagmo', width: 160 },
//   {
//     field: 'action',
//     headerName: 'Action',
//     width: 100,
//     renderCell: (params) => (
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <ActionCell {...params} />
//       </div>
//     ),
//   },
];

// Action Cell Component
// const ActionCell = (params: any) => {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const navigate = useNavigate();

//   const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => setAnchorEl(null);

//   const handleDelete = () => {
//     toast.success(`Deleted user ID: ${params.row.user_id}`);
//     handleClose();
//   };

//   return (
//     <div>
//       <MoreVertIcon onClick={handleClick} style={{ cursor: 'pointer' }} />
//       <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
//         <Link to={`/Dashboard/User/Update/${params.row.user_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//           <MenuItem>Update</MenuItem>
//         </Link>
//         <MenuItem onClick={handleDelete}>Delete</MenuItem>
//         <MenuItem onClick={() => console.log('More')}>More</MenuItem>
//       </Menu>
//     </div>
//   );
// };

// Main Component
export default function DataUsersCom() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 2 }}>
      <Box sx={{ width: '100%' }}>
        <DataGrid
          rows={exampleUserData.map((user) => ({ id: user.user_id, ...user }))}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          autoHeight
        />
      </Box>
    </Box>
  );
}
