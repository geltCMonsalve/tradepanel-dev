'use client';

import * as React from 'react';

import { useState, useEffect } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import CustomTextField from '@mui/material/TextField';// @core/components/mui/text-field'
import { Button } from '@mui/material';

import AppReactDatepicker from '@/utils/AppReactDatepicker';

import { USERS, CAMPAIGNS } from '@/data/Data'



function FilterInformation({ users, campaigns }) {


  return (
    <div>
      <SelectFilters traders={users} campaigns={campaigns} />
      <DateFilters />

    </div>
  );

}

function SelectFilters({ traders, campaigns }) {
  const [idTrader, setIdtrader] = useState();
  const [filterCampaigns, setfilterCampaigns] = useState([])


  // useEffect(() => {
  //   setIdtrader("456")
  // }, [])

  const handleChangeTrader = (event: SelectChangeEvent) => {
    setIdtrader(event.target.value);

    const filtersValues = campaigns.filter(row => {
      if (row.idUser.includes(idTrader)) {


        return true;
      }


      return false;
    })

    setfilterCampaigns(filtersValues);

  };


  return (
    <div>
      < InputLabel id="select-trader-label" >Trader</InputLabel >
      <Select
        labelId="select-trader-label"
        id="select-trader"
        value={traders[0].idUser}
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

      < InputLabel id="select-campaigns-label" >Campañas</InputLabel >
      <Select
        labelId="select-campaigns-label"
        id="select-campaigns"
        value={campaigns[0].id}
        label="Campañas"

        // onChange={handleChangeCampaigns}
        fullWidth
      >
        <MenuItem disabled value="">
          <em>Seleccione</em>
        </MenuItem>
        {

          filterCampaigns.map(({ id, idUser, campaignName }) => (
            <MenuItem
              key={id}
              value={id}
            >
              {campaignName}
            </MenuItem>
          ))
        }
      </Select>


    </div >
  );

}


function DateFilters() {
  const today = new Date();
  const [date, setDate] = useState<Date | null | undefined>(today);

  console.log(today);

  return (
    <div>
      <AppReactDatepicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={(date: Date) => setDate(date)}
        placeholderText='Click y selecciona Fecha de Inicio'
        customInput={<CustomTextField label='Fecha Inicio' fullWidth />}
      />


      <AppReactDatepicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={(date: Date) => setDate(date)}
        placeholderText='Click y selecciona Fecha Fin'
        customInput={<CustomTextField label='Fecha Fin' fullWidth />}
      />
    </div>
  );
}

function BotomSearch() {
  const [results, setResults] = useState(false);

  function handleClick() {
    console.log('Clicked');
    setResults(true)

  }

  console.log(results);

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleClick}>Buscar</Button>
      {results && <Results dataResults={results} />}
    </div>
  );
}

function Results({ dataResults }) {
  return (
    <div>RESULTS</div>
  );

}

export default function TradePanel() {



  return (
    <main>
      <div>
        <FilterInformation users={USERS} campaigns={CAMPAIGNS} />
        <BotomSearch />
      </div>
    </main>
  );
}
