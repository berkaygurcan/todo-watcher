import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Stack } from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import { Box } from "@mui/system";

const CardListItem = ({card}:any) => {
  return (
    <Card sx={{ maxWidth: 345 , marginBottom: 2}}>
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
            <Box sx={{mt:2}}>
              <VisibilityOutlinedIcon sx={{mr: 2}} fontSize="small"/>
              <InsertDriveFileOutlinedIcon fontSize="small" />
            </Box>
            <Box>
            <Typography sx={{mt : 2}} variant="body1" color="text.secondary">
              <AttachmentOutlinedIcon sx={{mr: 2}} fontSize="small"/>
              <InsertCommentIcon  fontSize="small"/>1
            </Typography>
            </Box>
            
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardListItem;
