import React from 'react'
import {Box, AppBar, Toolbar, Typography,Button} from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

export const AppTopBar = (props) =>{
    const history = useHistory()
    const showDogImage = () =>{
        console.log(history)
        history.push('/dogimage')
      }
      const showCatFact = () =>{
        history.push('/catfact')
      }
    return(
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dog-Cat Task
              </Typography>
                <React.Fragment>
                  <Button color='inherit' onClick={showDogImage}>Dog</Button>
                  <Button color="inherit" onClick={showCatFact}>Cat</Button>
                </React.Fragment>
            </Toolbar>
          </AppBar>
        </Box>
    )
}