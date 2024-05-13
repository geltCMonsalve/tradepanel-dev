import { Box } from "@mui/material";

import CampaignAccordion from "../../campaigns/CampaignDetails";


export function Campaign({ campaign }) {

  return (

    <Box>
      <CampaignAccordion campaign={campaign} />
    </Box>
  );
}
