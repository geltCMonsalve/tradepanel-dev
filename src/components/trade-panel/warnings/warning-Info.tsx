import React from 'react';

import { Box, Divider, Typography, TextField } from '@mui/material';

export default function WarningInfo() {


  return (
    <Box>
      <Box display={'flex'}>
        <Box
          width={600}
          pt={10}
          pb={12}
        >
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
