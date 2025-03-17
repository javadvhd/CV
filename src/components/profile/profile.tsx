import { Grid2, styled, SxProps, Typography } from "@mui/material";
import { ResumeCard } from "components/ui/resume-card";
import { WithBorderBottom } from "components/ui/with-border-bottom";

interface Props {
  sx?: SxProps;
  className?: string;
}
export function Profile({ sx, className }: Props) {
  return (
    <Grid2 sx={sx} className={className} container alignItems="center">
      <Grid2 size={{ xs: 12, sm: 6 }} container justifyContent="center">
        <ProfileImage radius={{ topRight: true, bottomLeft: true }} />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }} sx={{ px: 4 }} alignItems="flex-start">
        <Typography variant="h3" textAlign="left">
          Javad Vahedi
        </Typography>
        <Typography variant="subtitle1" textAlign="left" mb={3}>
          Software Developer
        </Typography>

        <WithBorderBottom sx={{ mb: 1.5 }}>
          <Typography variant="h4" textAlign="left">
            Profile
          </Typography>
        </WithBorderBottom>

        <Typography variant="body1" textAlign="left">
          Hello! I am Javad Vahedi, a skilled software developer with five years of experience specializing in React and TypeScript. Proven expertise in addressing complex challenges, demonstrated through work on a large-scale messenger project involving communication services (meet, call, classroom, live), stories, chat, WebSocket, IndexedDB, and Redux. Known for a detail-oriented and collaborative approach, delivering accurate solutions efficiently while excelling in problem-solving and adaptability.
        </Typography>
      </Grid2>
    </Grid2>
  );
}

const ProfileImage = styled(ResumeCard)`
  height: 230px;
  width: 100%;
  max-width: 140px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: 400px;
    width: 100%;
    max-width: 250px;
    margin-bottom: 0;
  }
  background-image: url("./images/profile-small.jpg");
  background-position: center;
  background-color: #fcede180;
  background-repeat: no-repeat;
  background-size: cover;
`;
