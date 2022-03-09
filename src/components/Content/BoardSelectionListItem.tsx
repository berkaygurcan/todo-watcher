import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import InsertChartIcon from "@mui/icons-material/InsertChart";

const BoardSelectionListItem = () => {
  return (
    <Card sx={{ display: "flex", width: 200, height: 150 }}>
      <CardContent>
          
        <h3>Board Title</h3>
        <InsertChartIcon />
      </CardContent>
    </Card>
  );
};

export default BoardSelectionListItem;
