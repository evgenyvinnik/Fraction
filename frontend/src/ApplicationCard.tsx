import { Application, User } from "./interfaces";
import { statusToText, statusToColor, amountToText } from "./utils";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

interface ApplicationCardProps {
  application: Application;
  applicant: User | undefined;
  applicationClicked: (application: Application) => void;
}

export const ApplicationCard = ({
  application,
  applicant,
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
                  <Typography gutterBottom variant="h6" component="div">
                    <b>
                      {application.address.streetNumber}{" "}
                      {application.address.street}
                      {application.address.premises
                        ? ", " + application.address.premises
                        : null}
                    </b>
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
            <Divider sx={{ margin: "15px" }} />
            <Grid item>
              <Typography variant="body2">
                Requested: <b>{amountToText(application.requestedAmount)}</b>
              </Typography>
              <Typography variant="body2">
                Created:{" "}
                {new Date(application.created).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
              {applicant ? (
                <Typography variant="body2">
                  Applicant: {applicant!.firstName} {applicant!.lastName}
                </Typography>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
