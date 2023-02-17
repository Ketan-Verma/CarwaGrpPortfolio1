// import * as React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          my: 0,
          pt: 2,
          width: "100vw",
          height: { xs: "50vh", md: "75vh" },
        },
      }}
    >
      <Paper sx={{ backgroundColor: "rgb(34,43,69)" }} elevation={1}>
        <Container>
          <Typography
            variant="h4"
            sx={{ color: "white", my: 4 }}
            align="center"
          >
            We Bring Good Things To Life
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "white", my: 4 }}
            align="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            esse natus enim aliquam iste accusamus culpa
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <Paper sx={{textAlign:'center', p: 1, backgroundColor: 'inherit'}}>L</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper sx={{textAlign:'center', p: 1, backgroundColor: 'inherit'}}>C</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper sx={{textAlign:'center', p: 1, backgroundColor: 'inherit'}}>M</Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}
