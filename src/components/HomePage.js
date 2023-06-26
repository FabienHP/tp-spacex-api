import {
  Button,
  Container,
  Paper,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllLaunches } from "../api/launches";
import { getAllCapsules } from "../api/capsules";

function HomePage() {

  const { data: launcheList, isLoading: isLauncheListLoading, isError: isLauncheListError, error: errorLaunche } = useQuery({
    queryKey: ['launches'],
    queryFn: getAllLaunches
  });

  const { data: capsuleList, isLoading: isCapsuleListLoading, isError: isCapsuleListError, error: errorCapsule } = useQuery({
    queryKey: ['capsules'],
    queryFn: getAllCapsules
  });

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
                {isLauncheListLoading && (
                  <>
                    <Skeleton variant="rounded" height={44} />
                    <Skeleton variant="rounded" height={44} sx={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} />
                    <Skeleton variant="rounded" height={44} sx={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }} />
                    <Skeleton variant="rounded" height={44} sx={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }} />
                  </>
                )}

                {isLauncheListError && (
                  <Typography variant="h5" align="center">{errorLaunche}</Typography>
                )}

                {!isLauncheListLoading && !isLauncheListError && (
                  launcheList?.map((data) => (
                    <Paper key={data.id} sx={{ borderRadius: "8px", padding: "6px 0" }} elevation={5}>
                      <Typography variant="h5" align="center">{data.name}</Typography>
                    </Paper>
                  ))
                )}
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
                {isCapsuleListLoading && (
                  <>
                    <Skeleton variant="rounded" height={44} />
                    <Skeleton variant="rounded" height={44} sx={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} />
                    <Skeleton variant="rounded" height={44} sx={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }} />
                    <Skeleton variant="rounded" height={44} sx={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }} />
                  </>
                )}

                {isCapsuleListError && (
                  <Typography variant="h5" align="center">{errorCapsule}</Typography>
                )}

                {!isCapsuleListLoading && !isCapsuleListError && (
                  capsuleList?.map((data) => (
                    <Paper key={data.id} sx={{ borderRadius: "8px", padding: "6px 0" }} elevation={5}>
                      <Typography variant="h5" align="center">{data.type}</Typography>
                      <Typography variant="subtitle2" align="center">{data.last_update}</Typography>
                    </Paper>
                  ))
                )}
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomePage;
