'use client';

import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';


import SearchDate from "@/components/trade-panel/filters/Search-date";
import Campaings from "@components/trade-panel/filters/Campaings";
import Trader from "@components/trade-panel/filters/Trader";
import ButtomSearch from "@components/trade-panel/buttoms/Buttom-search";

import Details from "@/components/trade-panel/details/Details";


// Config Imports
import themeConfig from '@configs/themeConfig'
import { ButtonGroup, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box>
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
            {`Bienvenido a tu Trade Panel ! 👋🏻`}</Typography>
          <Divider variant="middle" />
          <CardContent>
            <FormControl>
              <Trader />
              <Campaings />
              <SearchDate />
            </FormControl>
          </CardContent>
          <Divider variant="middle" />
          <CardActions className='card-actions-dense pl-9'>
            <Button variant="contained" color="success">Buscar</Button>
            <Button variant="outlined">Cancelar</Button>
          </CardActions>
        </Card>
      </Box>
      <Box>
        <Card>
          <CardContent>
            <Details />
          </CardContent>
          <Divider variant="middle" />
          <CardActions className='card-actions-dense'>
            <Button variant='text'>Button</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
