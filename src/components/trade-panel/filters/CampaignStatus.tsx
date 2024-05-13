import { useEffect, useState } from "react";

import { Box, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";

export function CampaignStatus({ newStatus }) {
  const [campaignActive, setCampaignActive] = useState('')

  function handleChangeRadio(event) {
    setCampaignActive(event.target.value)
    newStatus(event.target.value)

  }

  useEffect(() => {
    setCampaignActive('active')
    newStatus('active')
  }, [])

  return (
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
  );
}
