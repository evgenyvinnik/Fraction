import { Application } from "./interfaces";
import { ApplicationCard } from "./ApplicationCard";
import Grid from "@mui/material/Grid";

interface ApplicationsPanelProps {
  applications: Application[];
  applicationClicked: (application: Application) => void;
}

export const ApplicationsPanel = ({
  applications,
  applicationClicked,
}: ApplicationsPanelProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {applications.map((application, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ApplicationCard
            application={application}
            applicationClicked={applicationClicked}
          />
        </Grid>
      ))}
    </Grid>
  );
};
