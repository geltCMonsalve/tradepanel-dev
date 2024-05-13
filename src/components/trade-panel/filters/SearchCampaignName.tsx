import { useState } from "react";

import { Box, InputLabel, MenuItem, Select } from "@mui/material";

import CustomAutocomplete from '@core/components/mui/Autocomplete'

// import Autocomplete from '@mui/material/Autocomplete';

import CustomTextField from "@/@core/components/mui/TextField";

import { CAMPAIGNS } from '@/data/Data'

export function SearchCampaignName({ newCampaign }) {
  const [value, setValue] = useState(CAMPAIGNS[0].id);




  // const [searchOption, setSearchOption] = useState('001')

  // const searchOpt = [
  //   {
  //     "id": "001",
  //     "option": "PRIMERA SEMANA"
  //   },
  //   {
  //     "id": "002",
  //     "option": "NOMBRE DE LA CAMPAÑA"
  //   }
  // ]

  function handleChangeOptions(event) {
    setValue(event.target.value)
    newCampaign(event.target.value)

    // console.log("Clicked");

  }

  return (
    <Box minWidth={400}>
      {/* < InputLabel id="select-options-label" >Buscar por Campaña</InputLabel > */}
      {/* <Select
        labelId="select-options-label"
        id="select-options"
        value={searchOption}
        label="Options"
        onChange={handleChangeOptions}
        fullWidth
      >
        <MenuItem disabled value="">
          <em>Seleccione</em>
        </MenuItem>
        {searchOpt.map(({ id, option }) => (
          <MenuItem
            key={id}
            value={id}
          >
            {option}
          </MenuItem>
        ))}
      </Select> */}
      <CustomAutocomplete
        fullWidth
        options={CAMPAIGNS}
        id='autocomplete-custom'
        getOptionLabel={campaign => campaign.name || ''}

        // inputValue={value}

        // defaultValue={value}
        onChange={handleChangeOptions}
        renderInput={params => <CustomTextField placeholder='Campaña' {...params} label='Buscar por Campaña' />}
      />
    </Box>
  );
}
