import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { randomColor } from "./utils";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { User } from "./interfaces";

interface UserCardProps {
  user: User;
}

function stringAvatar(
  firstLetterFirlstName: string,
  firstLetterLastName: string
) {
  return {
    sx: {
      width: 52,
      height: 52,
      bgcolor: randomColor(),
    },
    children: firstLetterFirlstName + firstLetterLastName,
  };
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar {...stringAvatar(user.firstName[0], user.lastName[0])} />
          </Grid>
          <Grid item xs={12} sm container spacing={2}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs spacing={4}>
                <Typography gutterBottom variant="h6">
                  <b>
                    {user.firstName} {user.lastName}
                  </b>
                </Typography>
                <Typography variant="body1">
                  <b>{user.applications.length}</b>{" "}
                  {user.applications.length === 1
                    ? "application"
                    : "applications"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
