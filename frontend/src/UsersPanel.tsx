import { User } from "./interfaces";
import { UserCard } from "./UserCard";
import Grid from "@mui/material/Grid";

interface UsersPanelProps {
  users: User[];
}

export const UsersPanel = ({ users }: UsersPanelProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 4 }}
      columns={{ xs: 3, sm: 8, md: 12 }}
    >
      {users.map((user, index) => (
        <Grid item xs={1} sm={3} md={4} key={index}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};
