import { Box } from "@mui/material";

import { CAMPAIGNS } from '@/data/Data'

import { Campaign } from "./Campaign";

// import Warnings from "../warnings/Warnings";


export function ListCampaigns({ idTrader }) {


  // const emailTradeSession = 'belen.nunez@gelt.com'
  // const emailStorage = window.localStorage.getItem('emailTrader')
  // const emailTrader: string | never[] = []

  // // if (emailStorage)
  // //   window.localStorage.removeItem('emailTrader')

  // // window.localStorage.setItem('emailTrader', JSON.stringify(emailTradeSession))

  // // const emailTrader = (emailStorage) ? JSON.parse(emailStorage) : [];

  // // const emailStorage = window.localStorage.getItem('emailTrader')

  // if (emailStorage) {
  //   const emailTrader = JSON.parse(emailStorage)
  // }

  // // console.log(emailStorage);

  // // //   window.localStorage.removeItem('emailTrader')

  // // // window.localStorage.setItem('emailTrader', JSON.stringify('carlos.monsalve@gelt.com'))
  // console.log(emailTrader);


  return (

    <Box mt={10} mb={10}>
      {CAMPAIGNS.filter(rowCampaigns => rowCampaigns.iduser == idTrader) //rowCampaigns.iduser.includes(idTrader))
        .map(rowCampaign => (

          // <Box mt={10} key={rowCampaign.id}>
          <Campaign key={rowCampaign.id} campaign={rowCampaign} />

        ))}
    </Box>
  );

}


{/* <Box mt={5} mb={5} key={rowCampaign.id}>
              <Card key={rowCampaign.id}>
                <Warnings key={rowCampaign.id} />
              </Card>
            </Box>

          </Box> */}
