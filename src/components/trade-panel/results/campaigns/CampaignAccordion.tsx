// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Box, Chip, Grid } from '@mui/material'

import Badge from '@mui/material/Badge'

import CustomTextField from '@/@core/components/mui/TextField'
import Actions from '../warnings/Actions'

const CampaignAccordion = ({ campaign }) => {
  // States
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <Badge badgeContent={2} color='error'>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary id='controlled-panel-header-1' aria-controls='controlled-panel-content-1'>
            <Box minWidth={700}>
              <Typography variant='h5'>{campaign.name}</Typography>
            </Box>


            <Chip label={campaign.datecrea} color='error' variant='tonal' />
            <Box ml={5}><Chip label={campaign.datefin} color='error' variant='tonal' /></Box>


          </AccordionSummary>
          <AccordionDetails>
            <Box display={'flex'} mt={5} mb={10} >

              <Grid item xs={12} md={5} pr={5} >

                <CustomTextField
                  disabled
                  id='form-props-disabled'
                  label="Fecha Inicio"
                  defaultValue={campaign.datecrea}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={2} pr={5} >

                <CustomTextField
                  disabled
                  id='form-props-disabled'
                  label="Fecha Fin"
                  defaultValue={campaign.datefin}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={2} pr={5} >

                <CustomTextField
                  disabled
                  id='form-props-disabled'
                  label="Tiempo Transcurrido"
                  defaultValue={campaign.elapsedtime}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={2} pr={5} >

                <CustomTextField
                  disabled
                  id='form-props-disabled'
                  label="Unidades"
                  defaultValue={campaign.units}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={2} pr={5} >

                <CustomTextField
                  disabled
                  id='form-props-disabled'
                  label="Presupuesto Consumido"
                  defaultValue={campaign.budgetused}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={2} pr={5} >

                <CustomTextField
                  disabled
                  id='form-props-disabled'
                  label="Rentabilidad Actual"
                  defaultValue={campaign.currentprofitability}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={2} pr={5} >

                <CustomTextField
                  disabled
                  id='form-props-disabled'
                  label="Rentabilidad Estimnada"
                  defaultValue={campaign.estimatedprofitability}
                  fullWidth
                />
              </Grid>
            </Box>
            <Box mb={5}>
              <Actions />
            </Box>
            {/* <Typography>
              Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
              Topping soufflé tart sweet croissant.
            </Typography> */}
          </AccordionDetails>
        </Accordion >
      </Badge >

      {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary id='controlled-panel-header-2' aria-controls='controlled-panel-content-2'>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary id='controlled-panel-header-3' aria-controls='controlled-panel-content-3'>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </>
  )
}

export default CampaignAccordion
