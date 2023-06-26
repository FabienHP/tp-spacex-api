import {
  Button,
  Container,
  Paper,
  Stack,
  Typography
} from "@mui/material";

function HomePage() {
  return (
    <Container sx={{ height: "100vh" }}>
      <Stack direction="column" alignItems="center" height="100%" gap={7} paddingTop={7} paddingBottom={7}>
        <Typography variant="h1" align="center">SpaceX API demo</Typography>
        <Stack direction="column" gap={5} width="100%" height="100%" alignItems="center">
          <Paper sx={{
            width: "60%",
            height: "50%",
            borderRadius: "8px",
          }}
            elevation={2}
          >
            <Stack height="100%" direction="column" gap={5} padding={5}>
              <Typography variant="h2" align="center">Launches</Typography>
              <Stack sx={{ height: "100%", overflow: "auto" }} direction="column" gap={3}>
                <Paper sx={{ borderRadius: "8px" }} elevation={5}>
                  <Button fullWidth color="inherit" href="/launche/0" >
                    <Typography variant="h5" align="center">Name1</Typography>
                  </Button>
                </Paper>
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{
            width: "60%",
            height: "50%",
            borderRadius: "8px",
          }}
            elevation={2}
          >
            <Stack height="100%" direction="column" gap={5} padding={5}>
              <Typography variant="h2" align="center">Capsules</Typography>
              <Stack sx={{ height: "100%", overflow: "auto" }} direction="column" gap={3}>
                <Paper sx={{ borderRadius: "8px" }} elevation={5}>
                  <Button fullWidth color="inherit"  href="/capsule/0" >
                    <Typography variant="h5" align="center">Name1</Typography>
                  </Button>
                </Paper>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomePage;
