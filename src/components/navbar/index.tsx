import React, { useState } from 'react'
import { Box } from "@mui/material"
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItem } from '@/src/Config/constant';
interface Props {
  window?: () => Window
}

const index = ({window}: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              // onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }} >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItem.map((item) => (
              <Button key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
           ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default index
