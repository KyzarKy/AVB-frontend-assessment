import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { getAvatarFromName } from "helpers/getAvatarFromName";

import { getCommenters } from "store/slices/comments";

const useStyles = makeStyles((theme) => ({
  headingStyle: {
    textAlign: "center",
  },
}));

const TopCommenters = () => {
  const classes = useStyles();
  const commenters = useSelector(getCommenters);
  const commentersList = [];

  // Transform the commenters object back into an array, then sort it
  for (const [key, value] of Object.entries(commenters)) {
    commentersList.push({
      name: key,
      avatar: getAvatarFromName(key),
      numberOfComments: value,
    });
  }
  commentersList.sort((a, b) => b.numberOfComments - a.numberOfComments);

  return (
    <Paper>
      <Typography
        className={classes.headingStyle}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Top Commenters
      </Typography>
      <List>
        {/* Get only the top three */}
        {commentersList.slice(0, 3).map((commenter, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar alt={commenter.name}>{commenter.avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${commenter.name} - ${commenter.numberOfComments}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TopCommenters;
