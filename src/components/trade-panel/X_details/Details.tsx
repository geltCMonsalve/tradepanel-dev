import React, { useState } from 'react';

// import TextField from '@material-ui/core/TextField';
import TextField from '@mui/material/TextField';

// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Divider, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Warning from '../results/warnings/Warnings';

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

export default function Details({ displayName = 'block' }) {
  const [display, setDisplay] = useState(displayName)

  // const classes = useStyles();

  return (
    <Box

      //animation-name={'fadeOut'}
      display={display}
    >
      <Box
        mt={5}
        mb={10}>
        <Card>
          <CardContent>
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
          </CardContent>
          {/* <Divider variant="middle" /> */}
          {/* <CardActions className='card-actions-dense'>
            <Button variant='text'>Button</Button>
          </CardActions> */}
        </Card>
      </Box>
      <Box>
        <Card>
          <CardContent>
            <Warning />
          </CardContent>
          {/* <Divider variant="middle" /> */}
          {/* <CardActions className='card-actions-dense'>
            <Button variant='text'>Button</Button>
          </CardActions> */}
        </Card>
      </Box>
    </Box >

  );
}
