import { Box } from "@mui/material";

import { CAMPAIGNS } from '@/data/Data'
import CampaignDetails from "./CampaignDetails";



export function CampaignList({ infoParams }: { infoParams: any }) {

  // const campignStatus = infoParams.campaignStatus;
  console.log(infoParams);


  return (
    <Box mt={10} mb={10}>
      {infoParams.campaignInfo == null ? (
        CAMPAIGNS.filter(
          (rowCampaigns) =>
            rowCampaigns.iduser == infoParams.idTrader &&
            rowCampaigns.activo == infoParams.campaignStatus
        ).map((rowCampaign) => (
          <Box mt={5} key={rowCampaign.id}>
            <CampaignDetails campaign={rowCampaign} />
          </Box>
        ))) : (
        CAMPAIGNS.filter(
          (rowCampaigns) =>
            rowCampaigns.id == infoParams.campaignInfo.id
        ).map((rowCampaign) => (
          <Box mt={5} key={rowCampaign.id}>
            <CampaignDetails campaign={rowCampaign} />
          </Box>
        ))
      )}
    </Box>
  );
}

