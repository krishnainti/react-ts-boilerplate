import React, { FC, memo } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import { UserInterface } from "Interfaces/User";

interface UserCardProps {
  user: UserInterface;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.company.name}
        </Typography>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.username} ({user.email})
        </Typography>
        <Typography variant="body2">
          {user.address.street}, {user.address.suite}
          <br />
          {user.address.city},{user.address.zipcode}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default memo(UserCard);
