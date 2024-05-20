import * as React from 'react';
import { useState } from "react";

import { Autocomplete, Box, TextField } from "@mui/material";

import { CAMPAIGNS } from '@/data/Data'

type CampaignInfo = {
  filterCampaign: { campaignInfo: { id: string, name: string } | null; }
  onFilterCampaignChange: ((value: { campaignInfo: { id: string, name: string } | null; }) => void)
}

const campaignOptions = CAMPAIGNS.map((campaign) => ({
  id: campaign.id,
  name: campaign.name
}))

export function SearchCampaignInfo({ filterCampaign, onFilterCampaignChange }: CampaignInfo) {
  const [filterCampaignown, setFilterCampaignown] = useState<CampaignInfo | null>(filterCampaign.campaignInfo as unknown as CampaignInfo | null);

  return (
    <Box minWidth={400}>
      <Autocomplete
        options={campaignOptions}
        getOptionLabel={(option: any) => option.name}
        renderInput={(params) => <TextField {...params} label='Campaigns' />}
        value={filterCampaignown}
        onChange={(event: any, newValue: CampaignInfo | null) => {
          setFilterCampaignown(newValue || null);
          onFilterCampaignChange({ ...filterCampaign, campaignInfo: newValue || null });
        }}
      />
    </Box>
  );
}
