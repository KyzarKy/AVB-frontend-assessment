import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Modal, Paper, TextField } from "@material-ui/core";
import AddCommentIcon from "@material-ui/icons/AddComment";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";
import {
  updateName,
  updateComment,
  getComment,
  getName,
} from "store/slices/commentToPost";
import { addComment } from "store/slices/comments";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const CommentModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isOpen = useSelector(getViewCommentsModalOpen);

  const handleClose = () => dispatch(closeCommentsModal());

  const comment = useSelector(getComment);
  const name = useSelector(getName);

  const handleNameChange = (event) => dispatch(updateName(event.target.value));
  const handleCommentChange = (event) =>
    dispatch(updateComment(event.target.value));

  const handlePost = () => {
    dispatch(addComment({ name: name, comment: comment }));
    dispatch(updateComment(""));
    dispatch(closeCommentsModal());
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Paper className={classes.paper}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {/* Here, I used textFields bound to redux store data to represent the new comment to post.
          We could, instead or in addition, make this into a form-control.
          The form-control would be useful for forcing name/comment to be required fields, for instance.
          Since submitting empty name/body comments doesn't actively break anything, I haven't done that here but it would be a sensible improvement. */}
          <Grid item>
            <TextField
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
            />
          </Grid>
          <Grid item>
            <TextField
              id="comment"
              placeholder="Your Comment"
              multiline
              rows={4}
              variant="outlined"
              value={comment}
              onChange={handleCommentChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<AddCommentIcon />}
              onClick={handlePost}
            >
              Post Comment
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default CommentModal;
