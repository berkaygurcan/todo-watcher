import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BoardSelectionListItem from "./BoardSelectionListItem";
import List from "@mui/material/List";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const BoardSelection = () => {
  return (
    <Container sx={{ display: "flex", gap: 5 ,flexDirection: 'column',textAlign :"center" , alignItems: "center"}} >
      <h3>Todo Watcher App</h3>

      <List sx={{ display: "flex", gap: 5 }}>
          {/* @todo-boardListItemların içine kullanıcı ekleme sembolü ve en altta kullanıcıları görüntüleme kısmı eklenecektir */}
        <BoardSelectionListItem />
        <BoardSelectionListItem />
        <BoardSelectionListItem />
        {/* Board add card always in the list */}
        <Card sx={{ display: "flex", width: 200, height: 150 }}>
          <CardContent>
            <h3>Board Ekle</h3>
            <AddCircleOutlineIcon />
          </CardContent>
        </Card>
      </List>
    </Container>
  );
};

export default BoardSelection;
