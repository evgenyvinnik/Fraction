import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { User } from "./interfaces";

interface UserCardProps {
  user: User;
}

function randomColor() {
  const colors = ["#ED5B5D", "#F4BE0A", "#82C882", "#5B8DED", "#ED875B"];
  return colors[Math.floor(Math.random() * colors.length)];
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
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="h3" component="h3">
              <b>{user.applications.length}</b>{" "}
              {user.applications.length === 1 ? "application" : "applications"}
            </Typography>
              </Grid>
              {/* <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" component="h2">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="h3" component="h3">
              <b>{user.applications.length}</b>{" "}
              {user.applications.length === 1 ? "application" : "applications"}
            </Typography>
          </Box>
        </Box> */}
      </CardContent>
    </Card>
  );
};
