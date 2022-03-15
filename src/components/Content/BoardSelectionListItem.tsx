import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { useNavigate } from "react-router-dom";

const BoardSelectionListItem = () => {
  const navigate = useNavigate();
  return (
    <Card
    
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 150,
      }}
      onClick={() => navigate("/boardcontent")}
    >
      <CardContent>
        <InsertChartOutlinedIcon style={{ fontSize: 50 }} />
        <Typography variant="h5" gutterBottom component="div">
          Board Title
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BoardSelectionListItem;
