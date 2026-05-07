import React, { useState, useEffect, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
	Box,
	Container,
	Drawer,
	IconButton,
} from '@mui/material';

import Logo from "../../assets/icons/lusidpay_logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import "./styles.scss";

const navItems = [
	{ label: 'Platform Architecture', path: '/commerce/platform-architecture' },
	{ label: 'Lusid Audit',            path: '/commerce/audit' },
	{ label: 'Recovery & Defense',     path: '/commerce/recovery' },
	{ label: 'Enterprise Access',      path: '/commerce/enterprise-access' },
];

const CommerceNavBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;
	const [navDrawerOpen, setNavDrawerOpen] = useState(false);

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

	const handleNavDrawerClose = () => {
		setNavDrawerOpen(false);
	};

	const handleNavigate = (route) => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		navigate(route);
		setNavDrawerOpen(false);
	};

	return (
		show
		?
		<Box className="navbar"
			sx={{ boxShadow: window.scrollY > 0 ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "#fff 0px 0px" }}>
			<Container maxWidth="xl">
				<Box
					className="flexCenterSBRow"
					sx={{
						maxHeight: "80px",
						padding: "15px 0px 15px 0px"
					}}>

					{/* Logo */}
					<Box
						sx={{ cursor: "pointer" }}
						onClick={() => handleNavigate('/commerce')}>
						<img
							src={Logo}
							alt="lusid-logo"
							style={{ width: "180px" }}
						/>
					</Box>

					{/* Desktop nav items */}
					<Box
						className="flexCenter_Row"
						sx={{ gap: "20px", display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
						{navItems.map((item) => (
							<Box
								key={item.path}
								className={`navbar__item${path === item.path ? ' navbar__item--active' : ''}`}
								onClick={() => handleNavigate(item.path)}>
								<span>{item.label}</span>
							</Box>
						))}
					</Box>

					{/* Mobile hamburger */}
					<IconButton
						className="flexCenterCenterRow"
						onClick={() => setNavDrawerOpen(true)}
						sx={{
							width: "56px",
							height: "56px",
							display: { xs: "block", sm: "block", md: "none", lg: "none" },
							paddingTop: "10px",
							"&:hover": { backgroundColor: "#f1f1f1" }
						}}>
						<MenuIcon fontSize='large' />
					</IconButton>

					{/* Mobile drawer */}
					<Drawer
						open={navDrawerOpen}
						anchor="right"
						onClose={handleNavDrawerClose}>
						<Box
							className="flex_FSColumn"
							sx={{ width: "70vw", padding: "10px 10px 10px 10px" }}>
							<IconButton
								onClick={handleNavDrawerClose}
								sx={{
									width: "56px",
									height: "56px",
									display: { xs: "block", sm: "block", md: "none", lg: "none" },
									paddingTop: "10px",
									"&:hover": { backgroundColor: "#f1f1f1" }
								}}>
								<CloseIcon fontSize='large' />
							</IconButton>
							<Box
								sx={{ width: "100%", gap: "20px" }}
								className="flexCenterCenterColumn">
								{navItems.map((item) => (
									<Box
										key={item.path}
										className={`navbar__item${path === item.path ? ' navbar__item--active' : ''}`}
										onClick={() => handleNavigate(item.path)}>
										<span>{item.label}</span>
									</Box>
								))}
							</Box>
						</Box>
					</Drawer>

				</Box>
			</Container>
		</Box>
		:
		<Box sx={{ minHeight: "80px" }} />
	);
};

export default memo(CommerceNavBar);
