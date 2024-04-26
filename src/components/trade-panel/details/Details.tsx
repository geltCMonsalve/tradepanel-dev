import React from 'react';

// import TextField from '@material-ui/core/TextField';
import TextField from '@mui/material/TextField';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Divider, Typography } from '@mui/material';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& .MuiTextField-root': {
//         //margin: theme.spacing(1),
//         //minwidth: '250px',
//       },
//     },
//   }),
// );

export default function Details() {
  // const classes = useStyles();

  return (
    <Box>
      <Typography
        variant='h5'
        // align='center'
        pt={3}
        pb={3}
      >
        {`Detalles de la Campaña `}
      </Typography>
      <Divider variant="middle" />
      <Box
        width={800}
        pt={10}
        pb={12}
      >
        <TextField
          disabled
          id="filled-disabled"
          label="Campaña"
          defaultValue="ACCIÓN MÁS CASHBACK CICLO 4"
          variant="filled"
          fullWidth
        />
      </Box>
      <Box
        display="flex"
      >
        <Box>
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
        </Box>
      </Box>
    </Box>
  );
}
