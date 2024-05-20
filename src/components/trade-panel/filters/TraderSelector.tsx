import * as React from 'react';
import { useState } from 'react';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";

interface FiltersProps {
  traders: Array<{ id: string, name: string }>
  filterTrader: { idTrader: string, campaignInfo: { id: string, name: string } | null }
  onFilterTraderChange: ((value: { campaignInfo: { id: string, name: string } | null; idTrader: string }) => void)
}

export function TraderSelector({ traders, filterTrader, onFilterTraderChange }: FiltersProps) {
  const [filterTraderown, setFilterTraderown] = useState(filterTrader.idTrader as string)

  function handleChangeTrader(event: { target: { value: React.SetStateAction<string>; }; }) {
    setFilterTraderown(event.target.value)
    onFilterTraderChange({ ...filterTrader, campaignInfo: null, idTrader: event.target.value as string })
  }

  return (
    <Box minWidth={200} mr={5} >
      <FormControl fullWidth>
        < InputLabel id="select-trader-label" >Trader</InputLabel >
        <Select
          labelId="select-trader-label"
          id="select-trader"
          value={filterTraderown}
          label="Trader"
          onChange={handleChangeTrader}
        >
          <MenuItem disabled value="Seleccione">
            <em>Seleccione</em>
          </MenuItem>
          {traders.map(({ id, name }: { id: string, name: string }) => (
            <MenuItem
              key={id}
              value={id}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </Box>
  );
}
