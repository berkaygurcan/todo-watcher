import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BoardSelectionListItem from "./BoardSelectionListItem";
import List from "@mui/material/List";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import { createBoard, fetchBoardsData, fetchServiceLabels, set } from "../../features/boardSlice";
import { useAppDispatch, useAppSelector } from "../../Store/store";

const BoardSelection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.boards);

  useEffect(() => {
    //kullanıcının boardlarını getirme
    dispatch(fetchBoardsData());
  }, []);

  //service tarafından gelen labellar değişmeyecek ondan burada bir kere çeksek yeterli
  useEffect(() => {
    dispatch(fetchServiceLabels());
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

      <List sx={{ display: "flex", gap: 5, flexWrap: "wrap", maxWidth: "1000px" }}>
        
        {boards.value.map((board) => (
          <BoardSelectionListItem key = {board.id} board={board} />
        ))}

        {/* Board add card always in the list */}
        <Card
          onClick={() => {
            //create board
            createBoard().then((data) => navigate(`/boardcontent/${data.id}`))//bidaha niye async await gibi oldu?
          }}
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
