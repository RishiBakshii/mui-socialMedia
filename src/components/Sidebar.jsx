import React from 'react'
import {Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Switch} from '@mui/material'
import {Home,Pages,Group,Shop,Face,Settings,AccountBox,ModeNight} from '@mui/icons-material'
export const Sidebar = () => {
  return (
    <Box p={2} flex={1} sx={{display:{xs:"none",sm:"block"}}}>
        
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <Shop/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <Face/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>


          </List>
    </Box>
  )
}
