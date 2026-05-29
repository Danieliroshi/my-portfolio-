import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/image/avatar.png";
import EmailIcon from '@mui/icons-material/Email';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}


const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",

}))

const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
}))

const Hero = () => {
    return (
        <>
            <StyledHero>
                <Container >
                    <Grid container spacing={2}>
                        <Grid xs={4} >
                            <StyledImg src={Avatar} alt="avatar" />
                        </Grid>
                        <Grid xs={8}>
                            <Typography
                                color="primary"
                                variant="h1"
                                sx={{ textAlign: "center" }}
                            >
                                Daniel Futenma
                            </Typography>

                            <Typography
                                color="primary"
                                variant="h2"
                                sx={{ textAlign: "center" }}

                            >
                                I am a web developer
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<EmailIcon />}
                                sx={{
                                    display: "flex",
                                    margin: "20px auto",
                                }}
                            >
                                Contact me
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
