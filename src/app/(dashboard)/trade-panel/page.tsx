'use client';

import * as React from 'react';

// Config Imports
import themeConfig from '@configs/themeConfig'
import { ButtonGroup, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import SearchDate from "@/components/trade-panel/filters/Search-date";
import Trader from "@components/trade-panel/filters/Trader";
import ButtomSearch from "@components/trade-panel/buttoms/Buttom-search";
import Details from '@/components/trade-panel/details/Details';
import Warning from '@/components/trade-panel/warnings/Warning';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function TradePanel() {
  return (
    <Box>
      <Card>
        <Box
          mb={5}>
          <Card>
            {/* <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography> */}
            <Typography
              variant='h4'
              align='center'
              pt={3}
              pb={3}
            >
              {`Trade Panel `}
            </Typography>
            <Divider variant="middle" />
            <CardContent>
              <FormControl>
                <Trader />
                {/* <Campaings /> */}
                <SearchDate />
              </FormControl>
            </CardContent>
            <Divider variant="middle" />
            <CardActions className='card-actions-dense'>
              <ButtomSearch />
            </CardActions>
          </Card>
        </Box>
        <Box
          mb={10}>
          <Card>
            <CardContent>
              <Details />
            </CardContent>
            {/* <Divider variant="middle" /> */}
            {/* <CardActions className='card-actions-dense'>
            <Button variant='text'>Button</Button>
          </CardActions> */}
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <Warning />
            </CardContent>
            {/* <Divider variant="middle" /> */}
            {/* <CardActions className='card-actions-dense'>
            <Button variant='text'>Button</Button>
          </CardActions> */}
          </Card>
        </Box>
      </Card>
    </Box >
  );
}
