import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Card, Chip, Grid } from '@mui/material';


const steps = [
  {
    label: 'Acción 1',
    description: `Enseñas que no se han seleccionado por error o enseñas
                  en las que el producto está disponible pero el cliente
                  no lo sabía.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const steps2 = [
  {
    label: 'Acción 2',
    description: `Enseñas que no se han seleccionado por error o enseñas
                  en las que el producto está disponible pero el cliente
                  no lo sabía.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function CampaignActions() {

  const [activeStep1, setActiveStep1] = useState(0);
  const [activeStep2, setActiveStep2] = useState(0);
  const [activeStep3, setActiveStep3] = useState(0);
  const [activeStep4, setActiveStep4] = useState(0);


  const handleNextAction1 = () => {
    setActiveStep1((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBackAction1 = () => {
    setActiveStep1((prevActiveStep) => prevActiveStep - 1);
  };

  const handleResetAction1 = () => {
    setActiveStep1(0);
  };

  const handleNextAction2 = () => {
    setActiveStep2((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBackAction2 = () => {
    setActiveStep2((prevActiveStep) => prevActiveStep - 1);
  };

  const handleResetAction2 = () => {
    setActiveStep2(0);
  };

  const handleNextAction3 = () => {
    setActiveStep3((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBackAction3 = () => {
    setActiveStep3((prevActiveStep) => prevActiveStep - 1);
  };

  const handleResetAction3 = () => {
    setActiveStep3(0);
  };

  const handleNextAction4 = () => {
    setActiveStep4((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBackAction4 = () => {
    setActiveStep4((prevActiveStep) => prevActiveStep - 1);
  };

  const handleResetAction4 = () => {
    setActiveStep4(0);
  };

  return (
    <Box>
      <Box mb={5}>
        <Card>
          <Box pt={2} pb={5} sx={{ backgroundColor: '#f0f0f0' }}>
            <Grid mt={5} mr={5} mb={5} ml={5}><Chip label={'Rechazos (Enseña incorrecta)'} color='error' variant='tonal' /></Grid>
            <Box display={'flex'}>

              < Box ml={5} sx={{ maxWidth: 400 }}>
                < Stepper activeStep={activeStep1} orientation="vertical" >
                  {
                    steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">Last step</Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNextAction1}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBackAction1}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))
                  }
                </Stepper>
                {
                  activeStep1 === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                      <Typography>Todas las acciones fueron completadas</Typography>
                      <Button onClick={handleResetAction1} sx={{ mt: 1, mr: 1 }}>
                        Reset
                      </Button>
                    </Paper>
                  )
                }
              </ Box >

              <Box ml={5} sx={{ maxWidth: 400 }}>

                < Stepper activeStep={activeStep2} orientation="vertical" >
                  {
                    steps2.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">Last step</Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNextAction2}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBackAction2}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))
                  }
                </Stepper>
                {activeStep2 === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>Todas las acciones fueron completadas</Typography>
                    <Button onClick={handleResetAction2} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </ Box>
            </Box>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card>
          <Box pt={2} pb={5} sx={{ backgroundColor: '#f0f0f0' }}>
            <Grid mt={5} mr={5} mb={5} ml={5}><Chip label={'Rechazos (Faltan datos)'} color='error' variant='tonal' /></Grid>
            <Box display={'flex'}>

              <Box ml={5} sx={{ maxWidth: 400 }}>
                < Stepper activeStep={activeStep3} orientation="vertical" >
                  {
                    steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">Last step</Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNextAction3}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBackAction3}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))
                  }
                </Stepper>
                {activeStep3 === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>Todas las acciones fueron completadas</Typography>
                    <Button onClick={handleResetAction3} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </ Box>


              <Box ml={5} sx={{ maxWidth: 400 }}>
                < Stepper activeStep={activeStep4} orientation="vertical" >
                  {
                    steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">Last step</Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNextAction4}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBackAction4}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))
                  }
                </Stepper>
                {activeStep4 === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>Todas las acciones fueron completadas</Typography>
                    <Button onClick={handleResetAction4} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </ Box>
            </Box>
          </Box >
        </Card>
      </Box>
    </Box>
  );
}
