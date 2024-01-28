"use client";
import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';
export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps> = () => {
	const pageSize = 5;
	const columns = [
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			// renderCell: (params: GridRenderCellParams)=> // TODO continuar
		}
	]
	return (
		<div>
			<DataGrid
				rows={People}
				disableColumnSelector
				disableRowSelectionOnClick
				autoHeight
				paginationModel={{
					pageSize: pageSize,
					page: 0,
				}}

			/>
		</div>
	);
};

export default Home;
