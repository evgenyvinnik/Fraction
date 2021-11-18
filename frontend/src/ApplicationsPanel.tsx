import { Application, User } from "./interfaces";
import { ApplicationCard } from "./ApplicationCard";
import Grid from "@mui/material/Grid";
import { findUserForApplication } from "./utils";

interface ApplicationsPanelProps {
  applications: Application[];
  users: User[];
  applicationClicked: (application: Application) => void;
}

export const ApplicationsPanel = ({
  applications,
  users,
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
            applicant={findUserForApplication(users, application)}
            applicationClicked={applicationClicked}
          />
        </Grid>
      ))}
    </Grid>
  );
};
