import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

const FavoriteTable = () => {

  const pageSize = 5;
  const dispatch = useDispatch()

  const stateFavorite = useSelector((store: AppStore) => store.favorites)

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person))
  };

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>
        <IconButton aria-label="favorites" onClick={() => handleClick(params.row)}>
          <DeleteIcon color='secondary' fontSize='large' />
        </IconButton>
      </>
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ]
  return (
    <DataGrid
      rows={stateFavorite}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize
          }
        }
      }}
      getRowId={(row: any) => row.id}
    />
  )
}

export default FavoriteTable