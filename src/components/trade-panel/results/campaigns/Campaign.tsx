import { Box } from "@mui/material";

import CampaignAccordion from "./CampaignAccordion";


export function Campaign({ campaign }) {
  return (

    <Box>
      <CampaignAccordion campaign={campaign} />
    </Box>
  );
}
