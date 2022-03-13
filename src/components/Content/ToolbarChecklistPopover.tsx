import { Button, Popover, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ToolbarChecklistPopover = () => {

      //popper for checklist icon button
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(anchorEl ? null : event.currentTarget);
        };
        const handleOnClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? "simple-popper" : undefined;

  //popper end

  return (
    <Popover
              style={{ zIndex: 1400 }}
              id={id}
              open={open}
              onClose= {handleOnClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box
                sx={{
                  border: 1,
                  p: 1,
                  bgcolor: "background.paper",
                  width: 200,
                }}
              >
                <TextField
                  sx={{ mb: 2 }}
                  size="small"
                  id="checklist-title"
                  label="Checklist Title*"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
                <Button variant="contained">Add</Button>
              </Box>
            </Popover>
  )
}

export default ToolbarChecklistPopover
