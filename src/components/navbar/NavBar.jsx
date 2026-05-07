import React, { useState, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
	Box, 
	Container,
	Typography,
} from '@mui/material';

import Logo from "../../assets/icons/lusidpay_logo.svg";

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
					sx={{ maxHeight: "80px", padding: "15px 0px" }}>

					<Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
						<img src={Logo} alt="lusid-logo" style={{ width: "180px" }} />
					</Box>

					<Typography sx={{ fontSize: "0.875rem", color: "#56687a", fontWeight: 500 }}>
						Powered by{' '}
						<Box component="span" sx={{ fontWeight: 700, color: "#0f1933" }}>
							Lusid Certify
						</Box>
					</Typography>

				</Box>
			</Container>
		</Box>
		:
		<Box sx={{ minHeight: "80px" }} />
	);
};

export default memo(NavBar);
