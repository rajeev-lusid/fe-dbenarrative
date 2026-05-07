import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Link,
  Typography
} from '@mui/material';

// ...existing imports...

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isCommercePage = pathname === '/commerce' || pathname.startsWith('/commerce/');

  const handleNavigate = (route) => {
    handleGoTop();
    navigate(route);
  };

  const handleGoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const linkStyle = {
    margin: { xs: '6px 8px', sm: '0 14px' },
    color: '#253f83',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: { xs: '0.8rem', sm: '0.9rem' }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: '#fdfaf5',
        padding: { xs: '24px 0', sm: '40px 0' },
        textAlign: 'center',
        fontSize: '0.8rem',
        color: '#56687a',
        borderTop: '1px solid #dce6f1',
        letterSpacing: '0.1px'
      }}
    >
      <Container maxWidth="md">
        {isCommercePage && (
          <Box sx={{ marginBottom: '20px' }}>
            <Link
              onClick={() => handleNavigate('/')}
              sx={{ ...linkStyle, fontSize: { xs: '0.85rem', sm: '0.95rem' }, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              &#8592; Back to main site
            </Link>
          </Box>
        )}
        <Box sx={{ marginBottom: '16px' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <Link sx={linkStyle} onClick={() => handleNavigate('/terms-of-service')}>
              Terms of Service
            </Link>
            <Link
								href="https://www.currencycloud.com/legal/terms/"
								target="_blank" rel="noopener noreferrer"
								sx={linkStyle} 
								>
							  CC Terms
							</Link>
            <Link sx={linkStyle} onClick={() => handleNavigate('/security')}>
              Security
            </Link>
            <Link sx={linkStyle} onClick={() => handleNavigate('/privacy-policy')}>
              Privacy
            </Link>
            <Link sx={linkStyle} onClick={() => handleNavigate('/file-complaint')}>
              File Complaint
            </Link>
          </Box>
        </Box>
        
        <Typography 
          variant='body2'
          sx={{ fontWeight: 600, color: '#253f83', marginBottom: '10px', fontSize: { xs: '0.78rem', sm: '0.875rem' } }}>
          &copy; Copyright 2026 LusidPay Inc.
        </Typography>

        <Typography 
          variant='body2'
          sx={{ marginBottom: '12px', fontSize: { xs: '0.78rem', sm: '0.875rem' } }}>
          Lusid.ai and LusidPay.com are part of LusidPay Inc.
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.82em', sm: '0.98em' }, marginBottom: '18px' }}>
          LusidPay is a financial technology company. Payment and e-money services are provided by The Currency Cloud Limited. Registered in England No. 06323311. Registered Office: 1 Sheldon Square, London, W2 6TT, United Kingdom. The Currency Cloud Limited is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of electronic money (FRN: 900199).
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.82em', sm: '0.98em' }, marginBottom: '18px' }}>
          International payment services in the United States are provided by Visa Global Services Inc. (VGSI), a licensed money transmitter (NMLS ID 181032) in the states listed{' '}
          <Link
            href="https://usa.visa.com/legal/visa-global-services-licenses.html"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#253f83', fontSize: '1em' }}
          >
            here
          </Link>
          . VGSI is licensed as a money transmitter by the New York Department of Financial Services. Mailing address: 900 Metro Center Blvd, Mailstop 1Z, Foster City, CA 94404. VGSI is also a registered Money Services Business ("MSB") with FinCEN and a registered Foreign MSB with FINTRAC. For live customer support contact VGSI at (888) 733-0041.
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.82em', sm: '0.98em' } }}>
          <b>Safeguarding funds</b>
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.82em', sm: '0.98em' }, marginBottom: '18px' }}>
          When funds are posted to your account, e-money is issued in exchange for these funds, by an Electronic Money Institution who we work with, called Currencycloud. In line with regulatory requirements, Currencycloud safeguards your funds. This means that the money behind the balance you see in your account is held at a reputable bank, and most importantly, is protected for you in the unlikely event of Currencycloud's, or our, insolvency. Currencycloud stops safeguarding your funds when the money has been paid out of your account to your beneficiary's account.
        </Typography>


        <Typography sx={{ fontSize: { xs: '0.82em', sm: '0.98em' } }}>
          <b>Our Seal of Trust</b>
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.82em', sm: '0.98em' }, marginBottom: '18px' }}>
          We place the utmost importance on safeguarding our clients' funds, which is why we have partnered with Currencycloud, acquired in 2021 by Visa Inc., one of the world's most capitalized and reputable financial institutions.
          <br/><br/>
          All testimonials, reviews, opinions or case studies presented on our website may not be indicative of all customers. Results may vary and customers agree to proceed at their own risk.
        </Typography>


      </Container>
    </Box>
  );
};

export default Footer;