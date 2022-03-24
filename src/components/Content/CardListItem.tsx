import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, ListItem, Stack } from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import { Box } from "@mui/system";
import { useAppDispatch } from "../../Store/store";
import { showEditCardItemModal } from "../../features/modalSlice";
import EditCardItemModal from "./EditCardItemModal";

const CardListItem = ({ card }: any) => {
 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    
  };
  return (
    <React.Fragment>
      <Card
        sx={{ maxWidth: 345, marginBottom: 2 }}
        onClick={() => handleClickOpen()}
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="h6" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit.
            </Typography>

            <Divider />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Box sx={{ mt: 2 }}>
                <VisibilityOutlinedIcon sx={{ mr: 2 }} fontSize="small" />
                <InsertDriveFileOutlinedIcon fontSize="small" />
              </Box>
              <Box>
                <Typography
                  sx={{ mt: 2 }}
                  variant="body1"
                  color="text.secondary"
                >
                  <AttachmentOutlinedIcon sx={{ mr: 2 }} fontSize="small" />
                  <InsertCommentIcon fontSize="small" />{card.comments.length}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <EditCardItemModal currentCard={card} handleClose = {handleClose} open = {open} />
    </React.Fragment>
  );
};

export default CardListItem;
