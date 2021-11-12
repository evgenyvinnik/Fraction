import { Application } from "./interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
interface ApplicationCardProps {
  application: Application;
}

export const ApplicationCard = ({ application }: ApplicationCardProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            {/* <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid> */}
            {/* <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
