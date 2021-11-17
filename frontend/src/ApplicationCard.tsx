import { Application, ApplicationStatus } from "./interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

interface ApplicationCardProps {
  application: Application;
  applicationClicked: (application: Application) => void;
}

const statusToText = (status: ApplicationStatus) => {
  switch (status) {
    case ApplicationStatus.DRAFT:
      return "Draft";
    case ApplicationStatus.IN_PROGRESS:
      return "In progress";
    case ApplicationStatus.CLOSED:
      return "Closed";
    case ApplicationStatus.REJECTED:
      return "Rejected";
    default:
      return "Unknown";
  }
};

const statusToColor = (status: ApplicationStatus) => {
  switch (status) {
    case ApplicationStatus.DRAFT:
      return "#4D4D4D";
    case ApplicationStatus.IN_PROGRESS:
      return "#82C882";
    case ApplicationStatus.CLOSED:
      return "#F4BE0A";
    case ApplicationStatus.REJECTED:
      return "#ED5B5D";
    default:
      return "#FFFFFF";
  }
};

const amountToText = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const ApplicationCard = ({
  application,
  applicationClicked,
}: ApplicationCardProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container direction="column">
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {application.address.streetNumber}{" "}
                    {application.address.street}
                    {application.address.premises
                      ? ", " + application.address.premises
                      : null}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {application.address.city}
                    {", "}
                    {application.address.province}
                    {", "}
                    {application.address.country}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Chip
                  label={statusToText(application.status)}
                  variant="outlined"
                  color="primary"
                  style={{
                    borderColor: statusToColor(application.status),
                    color: statusToColor(application.status),
                  }}
                  onClick={() => {
                    applicationClicked(application);
                  }}
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Requested: <b>{amountToText(application.requestedAmount)}</b>
              </Typography>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Created{" "}
                <b>{new Date(application.created).toLocaleDateString('en-US', {
  day: 'numeric', month: 'long', year: 'numeric'
})}</b>
              </Typography>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Applicant <b>{application.applicant}</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
