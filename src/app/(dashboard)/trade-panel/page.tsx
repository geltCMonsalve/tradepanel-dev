'use client';

import * as React from 'react';

import { useState } from 'react';

import {
  Box,
  Card
} from '@mui/material';

import { USERS } from '@/data/Data'
import { Filters } from '@/components/trade-panel/filters/Filters';




export default function TradePanel() {
  // console.log(filtered);
  // const [params, setParams] = useState('');



  function filteredFunction(filtered) {
    // setParams(idTrader)
    console.log(filtered);

  }

  return (
    <main>
      <Card>
        <Box m={5}>

          <Filters traders={USERS} filtered={filteredFunction} />

          {/* <Campaigns traders={USERS} /> */}
        </Box>
      </Card>
    </main>
  );
}
