import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BoardSelectionListItem from "./BoardSelectionListItem";
import List from "@mui/material/List";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import board from "../../services/odevserver/controllers/board";
import { set } from "../../features/boardSlice";
import { useAppDispatch, useAppSelector } from "../../Store/store";

const BoardSelection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.boards)

  useEffect(() => { //kullanıcının boardlarını getirme
    board.list().then(({ data }) => {
      dispatch(set(data));
    });
  }, []);

  
  return (
    <Container
      sx={{
        display: "flex",
        gap: 5,
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        p: 20,
      }}
    >
      <Typography
        sx={{ fontWeight: "bold" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Todo Watcher App
      </Typography>
      
      <List sx={{ display: "flex", gap: 5 }}>
        {boards.value.map ((board) => (
          <BoardSelectionListItem board = {board}/>
        ))}
       
        {/* Board add card always in the list */}
        <Card
          onClick={() => navigate("/boardcontent")}
          sx={{
            display: "flex",
            width: 200,
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <AddCircleOutlinedIcon color="primary" style={{ fontSize: 50 }} />
            <Typography variant="h6" gutterBottom component="div">
              Add New Board
            </Typography>
          </CardContent>
        </Card>
      </List>
    </Container>
  );
};

export default BoardSelection;
