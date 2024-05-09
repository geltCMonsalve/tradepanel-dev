'use client';

import * as React from 'react';

import {
  Box,
  Card
} from '@mui/material';

import { USERS } from '@/data/Data'
import { Filters } from '@/components/trade-panel/filterComponents/Filters';


export default function TradePanel() {

  return (
    <main>
      <Card>
        <Box m={5}>
          <Filters traders={USERS} />
        </Box>
      </Card>
    </main>
  );
}
