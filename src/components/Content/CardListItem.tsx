import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Divider, ListItem, Stack } from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import { Box } from "@mui/system";

import EditCardItemModal from "./EditCardItemModal";

const CardListItem = ({ card }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };

  const calculateTotalTasks = card.checklists.reduce(
    (acc: number, curobj: any) => {
      return curobj.items.length + acc;
    },
    0
  );

  const calculateTotalCheckedTasks = card.checklists.reduce(
    (acc: number, curobj: any) => {
      let complatedTaskCount = curobj.items.filter(
        (item: any) => item.isChecked === true
      ).length;
      return complatedTaskCount + acc;
    },
    0
  );

  

  return (
    <React.Fragment>
      <Card
        sx={{ maxWidth: 345, marginBottom: 2 }}
        onClick={() => handleClickOpen()}
      >
        <CardActionArea>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {card.labels &&
                card.labels.length !== 0 &&
                card.labels.map((card: any, i: any) => (
                  <Chip
                    key={i}
                    size="small"
                    sx={{
                      minWidth: "35px",
                      maxHeight: "8px",
                      mx: 1,
                      backgroundColor: card.color,
                    }}
                  />
                ))}
            </Box>
            <Typography variant="h6" component="div">
              {card.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {calculateTotalTasks > 0 && (
                <Chip
                  label={`${calculateTotalCheckedTasks} / ${calculateTotalTasks}`} //checklist
                  sx={{ my: 1 }}
                  color={
                    calculateTotalCheckedTasks === calculateTotalTasks
                      ? "success"
                      : "default"
                  }
                  icon={<CheckCircleOutlineRoundedIcon />}
                />
              )}
              {card.duedate && (
                <Chip
                  label={card.duedate}
                  color="error"
                  sx={{ m: 1 }}
                  icon={<AccessTimeRoundedIcon />}
                />
              )}
            </Box>

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
                  <InsertCommentIcon fontSize="small" />
                  {card.comments.length}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <EditCardItemModal
        currentCard={card}
        handleClose={handleClose}
        open={open}
      />
    </React.Fragment>
  );
};

export default CardListItem;
