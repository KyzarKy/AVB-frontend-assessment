import React from "react";

import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentList from "components/CommentList";
import TopCommenters from "components/TopCommenters";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />

      <CommentModal />

      {/* preserving the App-header class while applying a little padding through a use/makestyles class */}
      <div className={`App-header ${classes.appHeader}`}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={4} lg={2}>
            <TopCommenters />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CommentList />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
