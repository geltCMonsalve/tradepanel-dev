import React from 'react';

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
  const classes = useStyles();

  return (
    <Box>
      <Box display={'flex'}>
        <Box width={600} pt={10} pb={12} >
          <TextField
            disabled
            id="filled-disabled"
            label=""
            defaultValue="> % rechazos por margen"
            variant="filled"
            fullWidth
          />
        </Box>
        <Box
          width={600}
          pt={10}
          pb={12}
          pl={8}
        >
          <TextField
            disabled
            id="filled-disabled"
            label="Posible Problema"
            defaultValue="> Problema: el PVP mín y máximo es demasiado acotado"
            variant="filled"
            fullWidth
          />
        </Box>
      </Box>

      <Box
        display="flex"
      >
        {/* <Box>
          <TextField
            disabled
            id="filled-disabled"
            label="Fecha Inicio"
            defaultValue="26/04/2024"
            variant="filled"
          />
        </Box>
        <Box
          pl={4}
        >
          <TextField
            disabled
            id="filled-disabled"
            label="Fecha Fin"
            defaultValue="26/04/2024"
            variant="filled"
          />
        </Box>
        <Box
          pl={4}
        >
          <TextField
            disabled
            id="filled-disabled"
            label="Tiempo Transcurrido"
            defaultValue="--"
            variant="filled"
          />
        </Box>
        <Box
          pl={4}
        >
          <TextField
            disabled
            id="filled-disabled"
            label="Unidades"
            defaultValue="82 / 3600"
            variant="filled"
          />
        </Box>
        <Box
          pl={4}
        >
          <TextField
            disabled
            id="filled-disabled"
            label="Presupuesto Consumido"
            defaultValue="33€ / 3600€"
            variant="filled"
          />
        </Box>
        <Box
          pl={4}
        >
          <TextField
            disabled
            id="filled-disabled"
            label="Rentabilidad Actual"
            defaultValue="75%"
            variant="filled"
          />
        </Box>
        <Box
          pl={4}
        >
          <TextField
            disabled
            id="filled-disabled"
            label="Rentabilidad Estimada"
            defaultValue="58%"
            variant="filled"
          />
        </Box>*/}

        <div className={classes.root}>
          <Typography variant='h5' pt={3} pb={3} >
            {`Acción 1 `}
          </Typography>
          {/* <Button variant="contained" color="success" href="/">Buscar</Button> */}
          <Button variant="outlined" color="primary">REVISAR TICKETS</Button>
          <Button variant="outlined" color="primary">REVISAR ENSEÑAS ONLINE</Button>
          <Typography variant='h5' pt={3} pb={3} >
            {`Acción 2 `}
          </Typography>
          <Button variant="outlined" color="primary">MODIFICAR MARGEN</Button>
          <Button variant="outlined" color="primary">AÑADIR EXCLUSIÓN</Button>

        </div>
      </Box>
    </Box>
  );
}
