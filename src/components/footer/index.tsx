import React from 'react'
import { Box, Typography, ButtonGroup } from "@mui/material"
import { Telegram, Instagram, Twitter } from '@mui/icons-material'
import { format } from   "date-fns"
const index = () => {
  return (
    <Box padding={"20px"}
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "primary.main", color: "white" }}
    >
      <Typography>
        @ {format(new Date(), "yyyy-MM-dd")} All Right Reserved
      </Typography>
      <ButtonGroup disableElevation variant='contained'>
        <Telegram />
        <Instagram />
        <Twitter />
      </ButtonGroup>
    </Box>
  )
}

export default index
