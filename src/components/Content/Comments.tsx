import {
  Avatar,
  Button,

  IconButton,
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
import { createComment, deleteComment, fetchBoardById } from "../../features/boardSlice";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import moment from "moment";
import ClearIcon from "@mui/icons-material/Clear";

const Comments = ({ comments, cardId}: any) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [comment, setComment] = useState("");

  const dispatch = useAppDispatch();
  const currentBoard = useAppSelector((state) => state.boards.currentBoard);

  const handleCommentInputChange = (event: any) => {
    const value = event.currentTarget.value;
    setComment(value);
    setBtnDisabled(!value);
  };

  const handleAddComment = () => {
    console.log(cardId)
    //istek atılıcak
    createComment(cardId, comment).then(() => dispatch(fetchBoardById(currentBoard.id)));
    setBtnDisabled(false);
  };

  const handleDeleteComment = (commentId:any) => {
    deleteComment(commentId).then(() =>
    dispatch(fetchBoardById(currentBoard.id))
  );
  }
 
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
          value={comment}
          onChange={handleCommentInputChange}
          variant="outlined"
        />
      </div>
      <Button
        variant="contained"
        onClick={handleAddComment}
        disabled={btnDisabled}
      >
        Add
      </Button>

      {/*@todo conditional rendering ile comment geçmişini getirebiliriz / commenti komple dahil edebiliriz bir componente */}

      <Typography variant="h6" component="div">
        <HistoryIcon /> Activity
      </Typography>

      {/* Activity Comments ve itemları olucak şimdilik bunlar için ayrı component tanımlamıyorum */}
      {/* Map ile commentleri döneriz */}

      <List>
        
        {comments.map((comment: any) => (
          <ListItem>
            <Avatar
              alt={comment.author.username.toUpperCase()}
              src="/static/images/avatar/1.jpg"
            />
            <Paper sx={{ p: 1, ml: 2, borderRadius: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography variant="body1" component="div">
                    {comment.author.username}
                  </Typography>
                  <Typography variant="body2" component="div">
                    {" - " + moment(comment.createdAt).fromNow()}
                  </Typography>
                </Box>

                <IconButton onClick={() => handleDeleteComment(comment.id)} size="small" edge="start" color="inherit">
                  <ClearIcon />
                </IconButton>
              </Box>
              <Typography>{comment.message}</Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Comments;
