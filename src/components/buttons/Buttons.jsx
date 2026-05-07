import React from 'react';

import { 
  Button, 
  CircularProgress 
} from '@mui/material';

const LoadingButton = (props) => {
  return (
    <Button { ...props } disabled={props.loading || props.disabled}>
      {
        props.loading
        ? <CircularProgress size={26}/>
        : props.children
      }
    </Button>
  )
}

export default LoadingButton;