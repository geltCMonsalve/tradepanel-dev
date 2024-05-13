import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  Box,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";


export function TraderSelector({ traders, idTraderFunction }) {

  const [IdTrader, setIdTrader] = useState('');
  const userSession = ('555')

  function handleChangeTrader(event) {

    setIdTrader(event.target.value)
    idTraderFunction(event.target.value)
  }

  useEffect(() => {
    setIdTrader(userSession)
    idTraderFunction(userSession)
  }, [])


  return (
    <Box minWidth={200} mr={5} >
      < InputLabel id="select-trader-label" >Trader</InputLabel >
      <Select
        labelId="select-trader-label"
        id="select-trader"
        value={IdTrader}
        label="Trader"

        onChange={handleChangeTrader}
        fullWidth
      >
        <MenuItem disabled value="">
          <em>Seleccione</em>
        </MenuItem>
        {traders.map(({ id, name }) => (
          <MenuItem
            key={id}
            value={id}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
