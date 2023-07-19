import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

const CreateUser = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div style={{ marginTop: '10px' }}>
          {' '}
          {/* Apply margin to the parent container */}
          <FormControl style={{ marginRight: '10px' }}>
            <InputLabel htmlFor="component-outlined">First Name</InputLabel>
            <OutlinedInput id="component-outlined" label="first Name" />
          </FormControl> 
          <FormControl style={{ marginRight: '10px' }}>
            <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
            <OutlinedInput id="component-outlined" label="lastName" />
          </FormControl>
          <FormControl style={{ marginRight: '10px' }}>
            <InputLabel htmlFor="component-outlined">Age</InputLabel>
            <OutlinedInput id="component-outlined" label="age" />
          </FormControl>
        </div>
      </div>
    </Box>
  );
};

export default CreateUser;
