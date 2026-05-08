import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: '#111827',
        padding: '40px 24px',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '8px' }}>
          &copy; 2026 LusidPay Inc. All rights reserved.
        </Typography>
        <Typography sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
          Lusid Certify is a compliance automation tool, not a law firm. We do not provide legal advice.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;