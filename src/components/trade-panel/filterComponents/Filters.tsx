import { useEffect, useState } from "react";

import type { SelectChangeEvent } from "@mui/material";
import { Box, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@mui/material";

import { ListCampaigns } from '@/components/trade-panel/results/campaigns/ListCampaigns';

export function Filters({ traders }) {

  const emailTradeSession = 'carlos.monsalve@gelt.com'

  // const [emailTrader, setEmailtrader] = useState(emailTradeSession)
  const [idTrader, setIdTrader] = useState('');
  const [searchOptions, setSearchOptions] = useState('')

  const [campaignActive, setCampaignActive] = useState('active')

  const handleChangeRadio = event => {
    setCampaignActive(event.target.value)
  }



  const searchFor = [
    {
      "id": "001",
      "option": "PRIMERA SEMANA"
    },
    {
      "id": "002",
      "option": "NOMBRE DE LA CAMPAÑA"
    }
  ]

  useEffect(() => {

    // const emailStorage = window.localStorage.getItem('emailTrader')

    // if (emailStorage)
    //   window.localStorage.removeItem('emailTrader')

    // window.localStorage.setItem('emailTrader', JSON.stringify(emailTradeSession))

    setIdTrader('555')

    // setEmailtrader('belen.nunez@gelt.com')
    setSearchOptions('001')

  }, [])

  const handleChangeTrader = (event: SelectChangeEvent) => {

    //   const emailStorage = window.localStorage.getItem('emailTrader')

    //   if (emailStorage)
    //     window.localStorage.removeItem('emailTrader')

    //   window.localStorage.setItem('emailTrader', JSON.stringify(event.target.value))
    setIdTrader(event.target.value)

    // };
  }

  const handleChangeOptions = (event: SelectChangeEvent) => {
    // window.localStorage.setItem('idCampaign', JSON.stringify(event.target.value))
    setSearchOptions(event.target.value);
  }


  return (
    <Box>
      <Box display={'flex'} >
        <Box minWidth={200} mr={5} >
          < InputLabel id="select-trader-label" >Trader</InputLabel >
          <Select
            labelId="select-trader-label"
            id="select-trader"
            value={idTrader}
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
        <Box minWidth={400}>
          < InputLabel id="select-options-label" >Buscar por</InputLabel >
          <Select
            labelId="select-options-label"
            id="select-options"
            value={searchOptions}
            label="Options"
            onChange={handleChangeOptions}
            fullWidth
          >
            <MenuItem disabled value="">
              <em>Seleccione</em>
            </MenuItem>
            {searchFor.map(({ id, option }) => (
              <MenuItem
                key={id}
                value={id}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>


        <Box ml={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Typography color='text.primary'>Tipo</Typography>
              <RadioGroup row aria-label='Activadas/No Activadas' name='controlled' value={campaignActive} onChange={handleChangeRadio}>
                <Box display={'flex'} minWidth={300}>
                  <FormControlLabel value='active' control={<Radio />} label='Activas' />
                  <FormControlLabel value='no-active' control={<Radio />} label='No Activas' />
                </Box>
              </RadioGroup>
            </Grid>
          </Grid>
        </Box>
      </Box>


      <ListCampaigns idTrader={idTrader} />
    </Box >
  );

}
