import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getAvatarFromName } from "helpers/getAvatarFromName";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";

import { getComments } from "store/slices/comments";

const useStyles = makeStyles((theme) => ({
  headingStyle: {
    textAlign: "center",
  },
}));

const CommentList = () => {
  const classes = useStyles();
  const comments = useSelector(getComments);

  return (
    <Paper>
      <Typography
        className={classes.headingStyle}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Comments
      </Typography>
      <List>
        {comments.map((comment, i) => (
          <ListItem key={comment.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={comment.name}>
                {getAvatarFromName(comment.name)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={comment.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {comment.comment}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CommentList;
