'use client';

import * as React from 'react';

import { useState } from 'react';

import {
  Box,
  Card
} from '@mui/material';

import { USERS } from '@/data/Data'
import { CampaignList } from '@/components/trade-panel/campaigns/CampaignList';
import { TraderSelector } from '@/components/trade-panel/filters/TraderSelector';
import { SearchCampaignInfo } from '@/components/trade-panel/filters/SearchCampaignInfo';
import { CampaignStatus } from '@/components/trade-panel/filters/CampaignStatus';

interface FiltersProps {
  idTrader: string;
  campaignInfo: { id: string, name: string } | null;
  campaignStatus: boolean;
}

export default function TradePanel() {
  const [infoParams, setInfoParams] = useState<FiltersProps>({
    idTrader: '555',
    campaignInfo: null,
    campaignStatus: true
  });

  return (
    <main>
      <Card>
        <Box m={5}>
          <Box>
            <Box display={'flex'} >
              <TraderSelector traders={USERS} filterTrader={infoParams} onFilterTraderChange={setInfoParams} />
              <SearchCampaignInfo filterCampaign={infoParams} onFilterCampaignChange={setInfoParams as (value: { campaignInfo: string | null; }) => void} />
              <CampaignStatus filterStatus={infoParams} onFilterStatusChange={setInfoParams as (value: { campaignStatus: boolean; campaignInfo: string | null; }) => void} />
            </Box >
            <CampaignList infoParams={infoParams} />
          </Box>
        </Box>
      </Card>
    </main>
  );
}
