import { useReducer, useEffect, useState } from "react";

import { Box } from "@mui/material";

import { CampaignList } from '@/components/trade-panel/campaigns/CampaignList';
import { TraderSelector } from "./TraderSelector";
import { SearchCampaignName } from "./SearchCampaignName";
import { CampaignStatus } from "./CampaignStatus";


function reducer(state, action) {
  // console.log(action.value);
  // console.log(state);


  // console.log(action);

  switch (action.type) {
    case 'idTrader': {
      return {
        ...state,
        idTrader: action.value
      };
    }

    case 'newCampignName': {
      return {
        ...state,
        campaignName: action.value
      };
    }

    case 'newStatus': {
      return {
        ...state,
        campaignStatus: action.value
      };
    }
  }

  // throw Error('Unknown action: ' + action.type);
}


export function Filters({ traders, filtered }) {

  const filteredValues =
  {
    idTrader: "",
    campaignName: "",
    campaignStatus: false
  }

  // console.log(filtered);


  // const emailTradeSession = 'carlos.monsalve@gelt.com'

  const [idTrader, setIdTrader] = useState('555')

  // const [searchOption, setSearchOption] = useState('')
  const [campaignActive, setCampaignActive] = useState(true)

  // const [campaignStatus, setCampaignStatus] = useState('active')
  const [state, dispatch] = useReducer(reducer, filteredValues);

  // console.log(state);

  filtered(state)


  // useEffect(() => {

  //   if (campaignActive)
  //     console.log("Es Status de Campaña");

  //   if (setIdTrader())
  //     console.log("Es id de Trader");

  //   filtered({
  //     ...filteredValues,
  //     campaignStatus: campaignActive
  //   })

  // }, [idTrader, campaignActive])



  function newIdTrader(id) {
    dispatch({
      type: 'idTrader',
      value: id
    });

  }

  function newCampaign(opt) {
    dispatch({
      type: 'newCampignName',
      value: opt
    });

  }

  function newStatus(optActive) {
    const newOptActive = (optActive == 'active') ? true : false

    dispatch({
      type: 'newStatus',
      value: newOptActive
    });


  }

  return (
    <Box>
      <Box display={'flex'} >
        <TraderSelector traders={traders} idTraderFunction={newIdTrader} />
        <SearchCampaignName newCampaign={newCampaign} />
        <CampaignStatus newStatus={newStatus} />
      </Box >
      {campaignActive &&
        <CampaignList idTrader={idTrader} campaignStatus={campaignActive} />
      }
    </Box>
  );

}
