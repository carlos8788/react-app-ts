"use client";
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '..';
import FavoriteTable from './FavoriTable/FavoriteTable';
import GradeIcon from '@mui/icons-material/Grade';
import IconButton from '@mui/material/IconButton';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

export type NavbarProps = {
	// types...
}

export const Navbar: React.FC<NavbarProps> = () => {

	const stateFavorite = useSelector((store: AppStore) => store.favorites)

	const handleClick = () => {
		dialogOpenSubject$.setSubject = true
	}
	return (
		<>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						React-TS-app
					</Typography>
					<IconButton aria-label="favorites" onClick={handleClick}>
						<GradeIcon color='secondary' fontSize='large'/>
					</IconButton>
				</Toolbar>

			</AppBar>
		</>
	);
};

// export default Navbar;
