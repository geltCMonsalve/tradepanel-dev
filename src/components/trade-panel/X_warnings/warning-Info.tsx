import React, { useState } from 'react';

import type { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';
import { Box, Divider, Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function WarningInfo() {
  const [visibleState, setVisibleState] = useState(false);
  const classes = useStyles();

  function handleClickCancel() {
    setVisibleState(true)
  }

  function SectionTwo() {
    return (
      <Box>
        <div className={classes.root}>

          <Typography variant='h5' pt={3} pb={3} >
            {`Acción 2 `}
          </Typography>
          <Button variant="outlined" color="primary">MODIFICAR MARGEN</Button>
          <Button variant="outlined" color="primary">AÑADIR EXCLUSIÓN</Button>
        </div>
      </Box>
    );
  }

  return (
    <Box>

      <Box mt={5} width={600}>
        <TextField
          disabled
          id="filled-disabled"
          label="Posible Problema"
          defaultValue="Problema: el PVP mín y máximo es demasiado acotado"
          variant="filled"
          fullWidth
        />
      </Box>

      {/* <Box
        display="flex"
      > */}
      <div className={classes.root}>
        <Typography variant='h5' pt={3} pb={3} >
          {`Acción 1 `}
        </Typography>

        <Button variant="outlined" color="primary" onClick={handleClickCancel}>REVISAR TICKETS</Button>
        <Button variant="outlined" color="primary" onClick={handleClickCancel} >REVISAR ENSEÑAS ONLINE</Button>
        {visibleState && <SectionTwo />}

      </div>
      {/* </Box> */}
    </Box>
  );
}
