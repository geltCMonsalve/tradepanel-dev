import { useState } from "react";

import { Box, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";

interface CampaignStatusProps {
  filterStatus: { campaignStatus: boolean, campaignInfo: string | null }
  onFilterStatusChange: ((value: { campaignStatus: boolean; campaignInfo: string | null; }) => void)
}

export function CampaignStatus({ filterStatus, onFilterStatusChange }: CampaignStatusProps) {
  const status = Boolean(filterStatus.campaignStatus) ? 'active' : 'no-active';
  const [campaignActive, setCampaignActive] = useState(status);

  function handleChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    setCampaignActive(event.target.value);
    onFilterStatusChange({ ...filterStatus, campaignInfo: null, campaignStatus: (event.target.value === 'active') ? true : false });
  }

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
