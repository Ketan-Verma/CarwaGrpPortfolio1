// import * as React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

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
          <Stack direction='row' spacing={42} sx={{backgroundColor: 'white'}}>
              <IconButton size="large">L</IconButton>
              <IconButton size="large">C</IconButton>
              <IconButton size="large">M</IconButton>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}
