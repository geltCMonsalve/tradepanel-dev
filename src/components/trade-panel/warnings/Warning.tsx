import React from 'react';

// import TextField from '@material-ui/core/TextField';
import TextField from '@mui/material/TextField';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Divider, Typography } from '@mui/material';
import WarningInfo from './warning-Info';


export default function Warning() {

  return (
    <Box>
      <Typography
        variant='h5'
        // align='center'
        pt={3}
        pb={3}
      >
        {`Warnings de la Campaña `}
      </Typography>
      <Divider variant="middle" />
      <WarningInfo />
    </Box>
  );
}
