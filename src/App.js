import React from 'react';
import {
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Visibility } from '@material-ui/icons';

function App() {
  return (
    <Grid container justify="center">
      <Grid item md={4}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Typography variant="h4" align="center">
                Login
              </Typography>
              <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Visibility />
                        {/* {true ?  : <VisibilityOff />} */}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box marginTop={4} display="flex" justifyContent="center">
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
