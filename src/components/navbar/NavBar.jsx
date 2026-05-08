import React, { useState, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
	Box, 
	Container,
	Typography,
} from '@mui/material';

import "./styles.scss";

const NavBar = () => {
	const navigate = useNavigate();

	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY + 5) {
			setShow(false);
		} else if (window.scrollY < lastScrollY) {
			setShow(true);
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastScrollY]);

	return (
		show
		?
		<Box
			className="navbar"
			sx={{ boxShadow: window.scrollY > 0 ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "#fff 0px 0px" }}>
			<Container maxWidth="xl">
				<Box
					className="flexCenterSBRow"
					sx={{ maxHeight: "100px", padding: "22px 0px" }}>

					<Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
						<Typography
							sx={{
								fontWeight: 700,
								fontSize: '1.5rem',
								letterSpacing: '-0.3px',
								color: '#0f1933',
								lineHeight: 1,
							}}
						>
							DBE Narrative
							<Box component="span" sx={{ color: '#0d67e3' }}>.com</Box>
						</Typography>
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
						<Typography sx={{ fontSize: '0.75rem', color: '#56687a', fontWeight: 500 }}>
							Powered by
						</Typography>
						<Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#0f1933' }}>
							Lusid Certify
						</Typography>
					</Box>

				</Box>
			</Container>
		</Box>
		:
		<Box sx={{ minHeight: "80px" }} />
	);
};

export default memo(NavBar);
