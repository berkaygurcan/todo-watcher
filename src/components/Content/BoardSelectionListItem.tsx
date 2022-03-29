import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../Store/store";
import { fetchBoardById } from "../../features/boardSlice";

const BoardSelectionListItem = ({ board }: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(fetchBoardById(Number(board.id))).then(() =>navigate(`/boardcontent/${board.id}`))
    
  }

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 150,
      }}
      onClick={handleOnClick}
    >
      <CardContent>
        <InsertChartOutlinedIcon style={{ fontSize: 50 }} />
        <Typography variant="h5" gutterBottom component="div">
          {board.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BoardSelectionListItem;
