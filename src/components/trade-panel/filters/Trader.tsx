import * as React from 'react';

import { USERS } from "@/data/Data"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import Campaings from "@components/trade-panel/filters/Campaings";


export default function Trader() {
  const [idTrader, setIdtrader] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setIdtrader(event.target.value);
  };

  console.log(idTrader);

  return (
    <Box
      mb={5}>
      <FormControl sx={{ minWidth: 250 }}>
        < InputLabel id="simple-select-trader-label" > Trader</InputLabel >
        <Select
          labelId="simple-select-trader-label"
          id="simple-select-trader"
          value={idTrader}
          label="Trader"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem disabled value="">
            <em>Seleccione</em>
          </MenuItem>
          {
            USERS.map(({ idUser, name }) => (
              <MenuItem
                key={idUser}
                value={idUser}
              >
                {name}
              </MenuItem>
            ))
          }

          {/* <MenuItem value={20}>Marcos Guit</MenuItem>
          <MenuItem value={30}>Carlos Fernandez</MenuItem>
          <MenuItem value={40}>Manuel Feando</MenuItem> */}
        </Select>
      </FormControl>
      <Campaings idTrader={idTrader} />
    </Box >
  );
}
