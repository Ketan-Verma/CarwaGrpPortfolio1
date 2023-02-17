import React from 'react'
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography'
function MainSection() {
  return (
    <>
    <Grid xs={12} item container 
    sx={{width: '100%', height: `${window.innerHeight}px`, position: 'relative', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' ,
    // backgroundImage: 'linear-gradient(red, yellow)'
    backgroundImage: 'url(/img1.jpg)'
}} 
    // justify="center" 
    alignItems='center'>
        <Typography 
        variant='h1' 
        sx={{textAlign: 'center'}}
        >
            Header One 
            <br />
            Section One
        </Typography>
    </Grid>
    <div
    // className={}
    style={{width: '100%', height: `${window.innerHeight}px`, position: 'relative', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' ,
    backgroundImage: 'url(/img2.jpg)'}}
    >
        <Grid
        xs={12}
        item
        container
        style={{height: '100%'}}
        alignItems='center'
        >
            <Typography 
        variant='h1' 
        sx={{textAlign: 'center'}}
        >
            Header Two 
            <br />
            Section Two
        </Typography>
        </Grid>
   </div>
    <div
    style={{width: '100%', height: `${window.innerHeight}px`, position: 'relative', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' ,
    backgroundImage: 'url(/img1.jpg)'}}
    >
        <Grid
        xs={12}
        item
        container
        style={{height: '100%'}}
        alignItems='center'
        >
            <Typography 
        variant='h1' 
        sx={{textAlign: 'center'}}
        >
            Header Three 
            <br />
            Section Three
        </Typography>
        </Grid>
   </div>
    <div
    style={{width: '100%', height: `${window.innerHeight}px`, position: 'relative', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundImage: 'url(/img2.jpg)'}}
    >
        <Grid
        xs={12}
        item
        container
        style={{height: '100%'}}
        alignItems='center'
        >
            <Typography 
        variant='h1' 
        sx={{textAlign: 'center'}}
        >
            Header Four 
            <br />
            Section Four
        </Typography>
        </Grid>
   </div>
    </>
  )
}

export default MainSection