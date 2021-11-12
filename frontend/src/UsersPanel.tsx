import { User } from "./interfaces";
import { UserCard } from "./UserCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface UsersPanelProps {
  users: User[];
}

export const UsersPanel = ({ users }: UsersPanelProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {users.map((user, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};
