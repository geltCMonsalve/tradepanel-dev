import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

import Data from '@/data/Data';

export default function Campaings({ idTrader = '000' }) {

  const [Campaings, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const campaings = (Data[1].campaingns) ? Data[1].campaingns : ['NO CAMPAÑAS'];

  // console.log(Campaings);


  return (
    <Box
      mt={5}
    >
      <FormControl sx={{ m: 0, minWidth: 550 }}>
        <InputLabel id="simple-select-campaings-label">Campañas</InputLabel>
        <Select
          labelId="simple-select-campaings-label"
          id="simple-select-campaings"
          value={Campaings}
          label="Campañas77777"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem disabled value="">
            <em>Seleccione</em>
          </MenuItem>
          {
            campaings.filter(campaings => campaings.idUser == idTrader)
              .map(campaings => (
                <MenuItem key={campaings.id} value={campaings.id}>{campaings.campaignName}</MenuItem>))
          }
          {/* <MenuItem value={10}>ACCIÓN MÁS CASHBACK CICLO 4</MenuItem>
          <MenuItem value={20}>PASCUAL MIMIK ENERO 2024</MenuItem>
          <MenuItem value={30}>CICLO 4 [26-01-24]</MenuItem>
          <MenuItem value={40}>GELT GO CICLO 4</MenuItem>
          <MenuItem value={50}>CATEGORY FARMACIA CICLO 3</MenuItem>
          <MenuItem value={60}>ACCIÓN RECASHBACK</MenuItem>
          <MenuItem value={70}>CICLO 3 [19-01-24]</MenuItem>
          <MenuItem value={80}>MAHOU CRM ENERO 2024</MenuItem>
          <MenuItem value={90}>ACCIÓN MÁS CASHBACK CICLO 3</MenuItem>
          <MenuItem value={100}>CICLO 2 [12-01-24]</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
