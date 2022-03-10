
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

const CardListItem = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography  variant="h6" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit.
          </Typography>

          <Divider />
          
          <Typography variant="body2" color="text.secondary">
          <InsertCommentIcon />
          1

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardListItem
