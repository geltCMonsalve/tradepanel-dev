import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function Trader() {
  const [Trader, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box
      mb={5}>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        < InputLabel id="simple-select-trader-label" > Trader</InputLabel >
        <Select
          labelId="simple-select-trader-label"
          id="simple-select-trader"
          value={Trader}
          label="Trader"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem disabled value="">
            <em>Seleccione</em>
          </MenuItem>
          <MenuItem value={10}>Ruben Ochoa</MenuItem>
          <MenuItem value={20}>Marcos Guit</MenuItem>
          <MenuItem value={30}>Carlos Fernandez</MenuItem>
          <MenuItem value={40}>Manuel Feando</MenuItem>
        </Select>
      </FormControl>
    </Box >
  );
}
