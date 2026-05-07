import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
	Box,
	Typography,
	Popover 
} from '@mui/material';

import "./styles.scss";

const NavPopover = ({ 
	open, 
	setOpen, 
	anchor, 
	setAnchor, 
	select,
	handleClick
}) => {
	const navigate = useNavigate();

	const handleOnClose = () => {
		setOpen(false);
		setAnchor(null);
	}

	const handleNavigate = (route, heading) => {
		handleClick()
		if(heading) {
			document.body.scrollTop = 0; // For Safari
  	  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
		handleOnClose();
		navigate(route)
	}

  return (
    <Popover 
			id={"product-popover"}
			open={open}
			anchorEl={anchor}
			onClose={handleOnClose}
			// anchorOrigin={{
			// 	vertical: 'bottom',
			// 	horizontal: 'left',
			// }}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			// disableRestoreFocus
		>
			{
				select === "products"
				?
				<Box sx={{ padding: "30px", gap: "80px", overflow:"auto" }}
				 	onMouseLeave={handleOnClose}
					className="flexFSSBRow">
					<Box>
						<Typography variant='subtitle1' sx={{ marginBottom: "10px", cursor: "pointer" }}>Products</Typography>
						{/* <Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/products#web-app", false)}>Lusid Web App</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/products#mobile-app", false)}>Lusid Mobile App</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/products#extension", false)}>Lusid Extension</Typography> */}
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/products/accounts-payable", true)}>Accounts payable</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/products/accounts-receivable", true)}>Accounts receivable</Typography>
						{/* <Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/products/expense-management", true)}>Expense management</Typography> */}
						{/* <Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/products#plugin")}>Lusid Plugin</Typography> */}
					</Box>
					<Box>
						<Typography variant='subtitle1' sx={{ marginBottom: "10px", cursor: "pointer" }}
							onClick={() => handleNavigate("/capabilities", true)}>Capabilities</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#ach-transfer", false)}>ACH Transfer</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#card-to-account", false)}>Card to Account</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#international-payments", false)}>International Payments</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#international-collections", false)}>International Collections</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#accounting-integration", false)}>Accounting Integration</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#invoice-payment-link", false)}>Invoice Payment Link</Typography>
					</Box>
					<Box sx={{ marginTop: "41.5px" }}>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#approval-workflow", false)}>Approval Workflow</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#security", false)}>Security</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#easy-bill-capture", false)}>Easy Bill Capture</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#auto-bill", false)}>Auto-Bill</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#recurring-payments", false)}>Recurring Payments</Typography>
						<Typography variant='body2' className='popover__item'
							onClick={() => handleNavigate("/capabilities#vendor-management", false)}>Vendor management</Typography>
					</Box>
				</Box>

				:
					select === "solutions"
					?
					<Box sx={{ padding: "30px", gap: "80px" }}
						onMouseLeave={handleOnClose}
						className="flexFSSBRow">
						<Box>
							<Typography variant='subtitle1' sx={{ marginBottom: "10px", cursor: "pointer" }}
								onClick={() => handleNavigate("/solutions")}>Overview</Typography>
							<Typography variant='body2' className='popover__item'
								onClick={() => handleNavigate("/solutions#overview", false)}>Solutions Overview</Typography>
							<Typography variant='body2' className='popover__item'
								onClick={() => handleNavigate("/solutions#reimaginating-payments", false)}>Reimaginating Payments</Typography>
						</Box>
						<Box>
							<Typography variant='subtitle1' sx={{ marginBottom: "10px", cursor: "pointer" }}
								onClick={() => handleNavigate("/solutions#consumer", false)}>For Consumers</Typography>
							<Typography variant='body2' className='popover__item'
								onClick={() => handleNavigate("/solutions#never-miss-a-bill", false)}>Never miss a Bill</Typography>
						</Box>
						<Box>
							<Typography variant='subtitle1' sx={{ marginBottom: "10px", cursor: "pointer" }}
								onClick={() => handleNavigate("/solutions#business", false)}>For Businesses</Typography>
							<Typography variant='body2' className='popover__item'
								onClick={() => handleNavigate("/solutions#control", false)}>Controls & reconcile spend</Typography>
							<Typography variant='body2' className='popover__item'
								onClick={() => handleNavigate("/solutions#policy-compliance", false)}>Policy Compliance</Typography>
						</Box>
					</Box>
					:
						select === "company"
						?
						<Box sx={{ padding: "30px", gap: "80px" }}
							onMouseLeave={handleOnClose}
							className="flexFSSBRow">
							<Box
							 	onClick={() => handleNavigate("/about-us", true)}>
								<Typography variant='body2' className='popover__item'>About us</Typography>
							</Box>
							<Box
								onClick={() => handleNavigate("/contact-us", true)}>
								<Typography variant='body2' className='popover__item'>Contact us</Typography>
							</Box>
						</Box>
						:
						<></>
			}
		</Popover>
  )
}

export default NavPopover;