import {
  Avatar,
  Button,
  Card,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import HistoryIcon from "@mui/icons-material/History";
import React, { useState } from "react";

const Comments = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  //@todo buton disable olayına tam karar vermedim olursa handle change eklenecek
  const handleCommentInputChange = (event: any) => {
    const value = event.currentTarget.value;
    setBtnDisabled(!value);
  };
  return (
    <Box>
      {/* Comments Section */}
      <Typography variant="h6" component="div">
        <CommentOutlinedIcon /> Comments
      </Typography>

      {/* Burası bir div olup içi comment group olabilir */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <TextField
          margin="dense"
          id="comment"
          label="Add comment"
          type="text"
          fullWidth
          onChange={handleCommentInputChange}
          variant="outlined"
        />
      </div>
      <Button variant="contained" disabled={btnDisabled}>
        Add
      </Button>

      {/*@todo conditional rendering ile comment geçmişini getirebiliriz / commenti komple dahil edebiliriz bir componente */}

      <Typography variant="h6" component="div">
        <HistoryIcon /> Activity
      </Typography>

      {/* Activity Comments ve itemları olucak şimdilik bunlar için ayrı component tanımlamıyorum */}
      {/* Map ile commentleri döneriz */}

      <List>
        <ListItem>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Paper>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>Remy Sharp</Typography>
              <Typography>about 3 hours ago</Typography>
            </Box>
            <Typography>
              We should be able to add date-fns without any problems
            </Typography>
          </Paper>
        </ListItem>
      </List>
    </Box>
  );
};

export default Comments;
