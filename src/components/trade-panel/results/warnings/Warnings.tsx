import React from 'react';

// import TextField from '@material-ui/core/TextField';
import TextField from '@mui/material/TextField';

// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Divider, Typography } from '@mui/material';

import WarningInfo from '../../X_warnings/warning-Info';


export default function Warnings() {

  return (
    <Box m={10}>

      <Typography
        variant='h5'
      >
        Rechazos por margen
      </Typography>
      <Divider variant="middle" />
      <WarningInfo />
    </Box>
  );
}
