'use client';

import * as React from 'react';

import { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import CustomTextField from '@mui/material/TextField';// @core/components/mui/text-field'
import { Button, Divider, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import AppReactDatepicker from '@/utils/AppReactDatepicker';

import { USERS, CAMPAIGNS, DETAILSCAMPAIGNS } from '@/data/Data'



function FilterInformation({ users, campaigns }) {


  return (
    <Card>
      <Box m={5}>
        <SelectFilters traders={users} campaigns={campaigns} />
        <DateFilters />
      </Box>
    </Card>
  );

}

function SelectFilters({ traders, campaigns }) {
  const [idTrader, setIdtrader] = useState('');
  const [idCampaign, setidCampaign] = useState('');
  const [filterCampaigns, setfilterCampaigns] = useState([])

  const handleChangeTrader = (event: SelectChangeEvent) => {
    window.localStorage.setItem('idTrader', JSON.stringify(event.target.value))

    setIdtrader(event.target.value);

    const filtersValues = campaigns.filter(row => {
      if (row.idUser.includes(event.target.value)) {


        return true;
      }


      return false;
    })

    setfilterCampaigns(filtersValues);

  };

  const handleChangeCampaigns = (event: SelectChangeEvent) => {
    window.localStorage.setItem('idCampaign', JSON.stringify(event.target.value))
    setidCampaign(event.target.value);
  }

  return (
    <Box display='flex'>
      <Box minWidth={350} mr={5} mb={10} >
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
          {

            traders.map(({ idUser, name }) => (
              <MenuItem
                key={idUser}
                value={idUser}
              >
                {name}
              </MenuItem>
            ))
          }
        </Select>
      </Box>
      <Box minWidth={750}>
        < InputLabel id="select-campaigns-label" >Campañas</InputLabel >
        <Select
          labelId="select-campaigns-label"
          id="select-campaigns"
          value={idCampaign}
          label="Campañas"
          onChange={handleChangeCampaigns}
          fullWidth
        >
          <MenuItem disabled value="">
            <em>Seleccione</em>
          </MenuItem>
          {

            filterCampaigns.map(({ id, campaignName }) => (
              <MenuItem
                key={id}
                value={id}
              >
                {campaignName}
              </MenuItem>
            ))
          }
        </Select>
      </Box>
    </Box >
  );

}


function DateFilters() {
  const today = new Date();
  const [date, setDate] = useState<Date | null | undefined>(today);

  // console.log(today);

  return (
    <Box display={'flex'}>
      <Box mr={5}>
        <AppReactDatepicker
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click y selecciona Fecha de Inicio'
          customInput={<CustomTextField label='Fecha Inicio' fullWidth />}
        />
      </Box>
      <Box>

        <AppReactDatepicker
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click y selecciona Fecha Fin'
          customInput={<CustomTextField label='Fecha Fin' fullWidth />}
        />
      </Box>
    </Box>
  );
}

function BotomSearch({ campaigns }) {
  const [results, setResults] = useState(false);
  const [campaignDetails, setCampaignDetails] = useState([]);

  // console.log(document.querySelector("select-campaigns"));


  function handleClickResult() {

    const idTraderStorage = window.localStorage.getItem('idTrader')
    const idCampaignStorage = window.localStorage.getItem('idCampaign')
    const arrayDetails: any[] = []

    if (idCampaignStorage) {
      const newidCampaign = JSON.parse(idCampaignStorage)

      campaigns.filter(row => row.id.includes(newidCampaign))
        .map(row => (
          arrayDetails.push(row)
        ))

      setCampaignDetails(arrayDetails)
      setResults(true)
    }
  }

  function handleClickCancel() {

    window.localStorage.removeItem('idTrader')
    window.localStorage.removeItem('idCampaign')

    // window.localStorage.removeItem('fechaIni')
    // window.localStorage.removeItem('fechaFin')

    setResults(false)
  }

  return (
    <Box>
      <Box mt={5} mb={5} display={'flex'}>
        <Box mr={5}>
          <Button variant="contained" color="success" onClick={handleClickResult}>Buscar</Button>
        </Box>
        <Box>
          <Button variant="outlined" color="primary" onClick={handleClickCancel}>Cancelar</Button>
        </Box>
      </Box>
      {results && <Results dataResults={campaignDetails} />}
    </Box >
  );
}

function Results({ dataResults }) {
  // const newCampaignDetails = dataResults[0];



  return (
    <Card>
      <Box m={5}>
        <Box>
          <Typography
            variant='h5'

            // align='center'
            pt={3}
            pb={3}
          >
            {`Detalles de la Campaña `}
          </Typography>
          <Divider variant="middle" />
          <Box
            width={800}
            pt={10}
            pb={12}
          >
            <TextField
              disabled
              id="filled-disabled"
              label="Campaña"
              defaultValue="ACCIÓN MÁS CASHBACK CICLO 4"
              variant="filled"
              fullWidth
            />
          </Box>
          <Box
            display="flex"
          >
            < Box
              pl={4}
            >

              {
                dataResults.map(({ id, campaignName }) => (
                  <TextField
                    disabled
                    key={id}
                    value={id}
                    label={campaignName}
                    variant="filled"
                  />
                ))
              }

            </Box>
            < Box
              pl={4}
            >
              <TextField
                disabled
                id="filled-disabled"
                label="Fecha Fin"
                defaultValue="26/04/2024"
                variant="filled"
              />
            </Box>
            <Box
              pl={4}
            >
              <TextField
                disabled
                id="filled-disabled"
                label="Tiempo Transcurrido"
                defaultValue="--"
                variant="filled"
              />
            </Box>
            <Box
              pl={4}
            >
              <TextField
                disabled
                id="filled-disabled"
                label="Unidades"
                defaultValue="82 / 3600"
                variant="filled"
              />
            </Box>
            <Box
              pl={4}
            >
              <TextField
                disabled
                id="filled-disabled"
                label="Presupuesto Consumido"
                defaultValue="33€ / 3600€"
                variant="filled"
              />
            </Box>
            <Box
              pl={4}
            >
              <TextField
                disabled
                id="filled-disabled"
                label="Rentabilidad Actual"
                defaultValue="75%"
                variant="filled"
              />
            </Box>
            <Box
              pl={4}
            >
              <TextField
                disabled
                id="filled-disabled"
                label="Rentabilidad Estimada"
                defaultValue="58%"
                variant="filled"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card >
  );

}

export default function TradePanel() {



  return (
    <main>
      <Box>
        <FilterInformation users={USERS} campaigns={CAMPAIGNS} />
        <BotomSearch campaigns={CAMPAIGNS} />
      </Box>
    </main>
  );
}
