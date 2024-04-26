// React Imports
import type { ComponentProps } from 'react'

// MUI Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Third-Party Imports
import ReactDatePickerComponent from 'react-datepicker'

// Styles
import 'react-datepicker/dist/react-datepicker.css';

type Props = ComponentProps<typeof ReactDatePickerComponent> & {
  boxProps?: BoxProps
}

// Styled Components
const StyledReactDatePicker = styled(Box)<BoxProps>(({ theme }) => ({
  // Custom styles for React-Datepicker...
}));

// Component to render the date-picker
const AppReactDatepicker = (props: Props) => {
  const { boxProps, ...rest } = props;

  return (
    <StyledReactDatePicker {...boxProps}>
      <ReactDatePickerComponent {...rest} />
    </StyledReactDatePicker>
  );
};

export default AppReactDatepicker;
