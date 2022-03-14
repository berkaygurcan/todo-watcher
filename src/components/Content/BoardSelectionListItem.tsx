import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import InsertChartIcon from "@mui/icons-material/InsertChart";
import {  useNavigate } from "react-router-dom";

const BoardSelectionListItem = () => {
  const navigate = useNavigate()
  return (
    <Card sx={{ display: "flex", width: 200, height: 150 }} onClick = {() => navigate("/boardcontent")}>
      <CardContent>
          
        <h3>Board Title</h3>
        <InsertChartIcon />
      </CardContent>
    </Card>
  );
};

export default BoardSelectionListItem;
