"use client";

import NextLink from "next/link";

import { Typography, Grid, Chip, Link } from "@mui/material";
import {
 DataGrid,
 GridColDef,
 GridRenderCellParams,
 GridRowsProp,
} from "@mui/x-data-grid";

// PARA REALIZAR ESTA PARTE, TUVIMOS QUE DESCARGAR OTROS COMPONENTES DE LA LIBRERIA MATERIAL yarn add @mui/x-data-grid

const columns: GridColDef[] = [
 { field: "id", headerName: "ID", width: 100 },
 { field: "fullname", headerName: "Nombre Completo", width: 300 },

 {
  field: "paid",
  headerName: "Pagada",
  description: "Muestra informacion si esta pagada la orden o no",
  width: 200,
  renderCell: (params: GridRenderCellParams) => {
   return params.row.paid ? (
    <Chip color='success' label='Pagada' variant='outlined' />
   ) : (
    <Chip color='error' label='No pagada' variant='outlined' />
   );
  },
 },

 {
  field: "order",
  headerName: "Ver orden",
  width: 200,
  sortable: false,
  renderCell: (params: GridRenderCellParams) => {
   return (
    <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
     <Link underline='always'>Ver orden</Link>
    </NextLink>
   );
  },
 },
];

const rows: GridRowsProp = [
 { id: 1, paid: true, fullname: "Reinaldo Contreras" },
 { id: 2, paid: false, fullname: "Fernando Herrera" },
 { id: 3, paid: true, fullname: "Diego Villaviencio" },
 { id: 4, paid: false, fullname: "Jorge Sanchez" },
 { id: 5, paid: true, fullname: "Luis Paz" },
 { id: 6, paid: true, fullname: "Gustavo Barreto" },
];

const HistoryPage = () => {
 return (
  <>
   <Typography variant='h1' component='h1'>
    Historial de ordenes
   </Typography>

   <Grid container>
    <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
     <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
       pagination: {
        paginationModel: { pageSize: 10 },
       },
      }}
      pageSizeOptions={[5, 10, 25]}
     />
    </Grid>
   </Grid>
  </>
 );
};

export default HistoryPage;
